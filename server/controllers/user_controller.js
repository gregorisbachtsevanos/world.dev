import mongoose from "mongoose";
import ip from "ip";
import si from "systeminformation";
import detectBrowser from "detect-browser";

import User from "../models/user_model.js";
import Article from "../models/article_model.js";

const { detect } = detectBrowser;

// Create new User
export const registerLogic = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            username,
            email,
            password,
            repeatPassword,
            gender,
        } = req.body;
        console.log(password, repeatPassword);
        if (password != repeatPassword) {
            throw new Error("Passwords not match");
        }
        const user = await new User({
            firstname,
            lastname,
            username,
            email,
        });

        gender ? (user.extra_info.gender = gender) : void 0;
        user.extra_info.ipAddress = ip.address();
        let browser = detect(req.headers["user-agent"])
            ? detect(req.headers["user-agent"]).name
            : false;

        if (browser) {
            user.extra_info.browser = browser;
        }

        await si.cpu().then((data) => {
            const { family, vendor, brand, manufacturer } = data;
            console.log(data);
            user.extra_info.device.manufacturer = manufacturer;
            user.extra_info.device.brand = brand;
            user.extra_info.device.vendor = vendor;
            user.extra_info.device.family = family;
        });
        // return console.log('user')
        const newUser = await User.register(user, password);
        console.log({ newUser });
        await newUser.save();
    } catch (error) {
        console.log(error.message);
    }
};

// Login a User
export const loginLogic = async (req, res) => {
    const user = await User.findOne(req.username)
    res.status(200).send(user)
};

// Index page data
export const indexPage = async (req, res) => {
    const articles = await Article.find().populate('author').sort({ 'updatedAt': -1 })
    res.status(200).send(articles)
};

// Tags page data
export const tagsPage = async (req, res) => {
    res.send({ page: 'Tags' })
};

// About page data
export const aboutPage = async (req, res) => {
    res.send({ page: 'About' })
};

// Contact page data
export const contactPage = async (req, res) => {
    res.send({ page: 'Contact' })
};

// Get user's profile data
export const getUserProfile = async (req, res) => {
    res.send({ page: "Profile" })
};

// Get user's settings data
export const getUserSettings = async (req, res) => {
    res.send({ page: "Settings" })
};
// write article
export const newArticle = async (req, res) => {
    // return console.log()
    const article = await Article(req.body)
    article.author = req.query.userId
    await article.save()
    res.send(req.body)
};
