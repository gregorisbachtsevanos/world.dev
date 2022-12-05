import { Router } from "express";
import passport from "passport";

import asyncCatch from "../utils/asyncCatch.js";
import ThrowError from "../utils/ThrowError.js";
import schemaValidation from "../middleware/schemaValidation.js";

import { registerLogic, loginLogic, indexPage, tagsPage, aboutPage, contactPage, getUserProfile, getUserSettings, newArticle, getArticle } from "../controllers/user_controller.js";

import { changeTheme, getUser } from "../controllers/apis/user_api.js";

var router = Router();

const validateUser = (req, res, next) => {
    const { error } = schemaValidation.userSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(",");
        throw new ThrowError(msg, 400);
    } else {
        next();
    }
};


//Post user (register)
router.post("/register", validateUser, asyncCatch(registerLogic));

//Get user (login)
router.post(
    "/login",
    passport.authenticate("local"),
    (loginLogic)
);

router.get("/", indexPage);

router.get("/user", getUser);

router.get("/tags", tagsPage);

router.post("/change-theme", changeTheme);

router.get("/about", aboutPage);

router.get("/contact", contactPage);

router.get("/article/:article", getArticle);

router.get("/:username", asyncCatch(getUserProfile));

router.route("/:username/settings")
    .get(asyncCatch(getUserSettings))
    .post(asyncCatch());

// router.post("/:username/new-article", (newArticle));
router.post("/new-article", (newArticle));

export default router;
