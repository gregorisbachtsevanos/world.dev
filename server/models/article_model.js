import mongoose, { models } from "mongoose";

const { Schema } = mongoose;

const articleSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            required: true,
            trim: true,
        },
        title: {
            type: String,
            trim: true,
        },
        body: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true,
    }
)

export default mongoose.models('Articles', articleSchema)