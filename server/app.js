import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { createLogger } from 'log-fns';
import passport from 'passport';
import localStrategy from 'passport-local';
import session from 'express-session'

import User from './models/user_model.js'
import sessionConfig from "./config/session_config.js"
import indexRouter from './routes/index_router.js';
import usersRouter from './routes/users_router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

import './config/db_config.js'

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// passport config
app.use(session(sessionConfig))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req, res, next) => {
    // res.locals.appUrl = process.env.APP_URL
    res.locals.currentUser = req.user
    next()
})

// app.use('/', indexRouter);
app.use('/', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.all('*', (err, req, res, next) => {
    next(new ExpressError("Not Found", err));
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    console.error(err);
    // render the error page
    res.status(err.status || 500);
});

export default app;
