import mongoose from "mongoose";
import validator from "validator";
import passportMongoose from "passport-local-mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        firstname: { type: String, trim: true, required: true },
        lastname: { type: String, trim: true, required: true },
        email: { type: String, required: true, unique: true },
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is not valid");
            }
        },
        extra_info: {
            ipAddress: { type: String, trim: true },
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
        },
        device: {
            manufacturer: { type: String, trim: true }, // etc'Apple'
            brand: { type: String, trim: true }, // etc'M1'
            vendor: { type: String, trim: true }, // etc'Apple'
            family: { type: String, trim: true }, // etc'458787763'
        },
        browser: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

userSchema.plugin(passportMongoose);

export default mongoose.model("User", userSchema);