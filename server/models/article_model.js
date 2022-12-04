import mongoose from "mongoose";

const { Schema } = mongoose;

const articleSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        title: {
            type: String,
            unique: true,
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

export default mongoose.model('Articles', articleSchema)