import { Router } from "express";
import passport from "passport";

import asyncCatch from "../utils/asyncCatch.js";
import ThrowError from "../utils/ThrowError.js";
import schemaValidation from "../middleware/schemaValidation.js";

import { registerLogic, loginLogic, tags, about, contact } from "../controllers/user_controller.js";

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

// router.get("/", asyncCatch());

//Post user (register)
router.post("/register", validateUser, asyncCatch(registerLogic));

//Get user (login)
router.post(
    "/login",
    passport.authenticate("local"),
    (loginLogic)
);

router.get("/tags", tags);

router.get("/about", (req, res) => {
    res.send({ page: 'asyncCatch' })
});

router.get("/contact", contact);

router.get("/:username", asyncCatch());

router.route("/:username/settings")
    .get(asyncCatch())
    .post(asyncCatch());

router.post("/:username/write", asyncCatch());

export default router;
