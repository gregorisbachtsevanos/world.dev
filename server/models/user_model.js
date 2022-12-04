import mongoose from "mongoose";
import validator from "validator";
import passportMongoose from "passport-local-mongoose";

const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
    {
        firstname: { type: String, trim: true, required: true },
        lastname: { type: String, trim: true, required: true },
        email: { type: String, trim: true, required: true, unique: true },
        // validate(value) {
        //     if (!validator.isEmail(value)) {
        //         throw new Error("Email is invalid");
        //     }

        // },
        extra_info: {
            theme: { type: String, trim: true },
            avatar: { type: String, trim: true },
            phone: { type: Number, trim: true, min: 10, max: 10 },
            bio: { type: String, trim: true, maxLength: 120 },
            gender: {
                type: String,
                trim: true,
                lowercase: true,
                enum: ["male", "female"],
            },
            year_of_birth: { type: Number, trim: true },
            ipAddress: { type: String, trim: true },
            browser: { type: String, trim: true },
            device: {
                manufacturer: { type: String, trim: true }, // etc'Apple'
                brand: { type: String, trim: true }, // etc'M1'
                vendor: { type: String, trim: true }, // etc'Apple'
                family: { type: String, trim: true }, // etc'458787763'
            },
        },
    },
    {
        timestamps: true,
    }
);

userSchema.plugin(passportMongoose);

export default mongoose.model("User", userSchema);
