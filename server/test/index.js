import * as dotenv from "dotenv";
import mongoose from "mongoose";
import log4js from 'log4js';
const log = log4js.getLogger();
log.level = 'all';

process.env.NODE_ENV !== "production" ? dotenv.config({ path: '../.env' }) : void 0;

mongoose.connect(process.env.DB_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on(
    "error",
    console.error.bind(console, "connection error")
);
mongoose.connection.once("open", () => log.trace("Database connected"));
