import { Router } from "express";
import passport from "passport";

import asyncCatch from "../utils/asyncCatch.js";
import ThrowError from "../utils/ThrowError.js";
import { registerLogic, loginLogic } from "../controllers/user_controller.js";
import schemaValidation from "../middleware/schemaValidation.js";
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

router.get("/", asyncCatch());

//Post user (register)
router.post("/register", validateUser, asyncCatch(registerLogic));

//Get user (login)
router.post(
    "/login",
    passport.authenticate("local", { failureRedirect: "/" }),
    (loginLogic)
);

router.get("/tags", asyncCatch());

router.get("/about", asyncCatch());

router.get("/contact", asyncCatch());

router.get("/register", asyncCatch());

router.get("/:username", asyncCatch());

router.route("/:username/settings")
    .get(asyncCatch())
    .post(asyncCatch());

router.post("/:username/write", asyncCatch());

//Get user by Id

//Put user

//Delete user

export default router;
