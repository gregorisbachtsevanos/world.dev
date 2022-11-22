
import * as dotenv from 'dotenv'
process.env.NODE_ENV !== "production" ? dotenv.config({ path: './.env' }) : void 0;

const sessionConfig = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
}

export default sessionConfig