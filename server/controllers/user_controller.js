import mongoose from "mongoose";
import ip from "ip";
import si from "systeminformation";
import detectBrowser from "detect-browser";

import User from "../models/user_model.js";

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
            repeat_password,
            gender,
        } = req.body;

        if (password != repeat_password) {
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

        si.cpu().then((data) => {
            const { family, vendor, brand, manufacturer } = data;
            user.extra_info.device.manufacturer = manufacturer;
            user.extra_info.device.brand = brand;
            user.extra_info.device.vendor = vendor;
            user.extra_info.device.family = family;
        });

        const newUser = await User.register(user, password);
        console.log({ newUser });
        await newUser.save();
    } catch (error) {
        console.log(error.message);
    }
};

// Login a User
export const loginLogic = async (req, res) => {
    console.log(req.body)
    const user = await User.findOne(req.username)
    // return console.log(user)
    res.send({ user })
};

// Tags page data
export const tags = async (req, res) => {
    res.send({ page: 'Tags' })
};

// About page data
export const about = async (req, res) => {
    res.send({ page: 'About' })
};

// Contact page data
export const contact = async (req, res) => {
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
export const writeArticle = async (req, res) => {
    res.send({ page: "Write an Article" })
};
