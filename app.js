const express = require("express");
app = express();
const mongoose = require('mongoose');
app.use(express.static('public'));
app.set('view engine', 'ejs');
const userRoutes = require('./routes/userRoute');
const farmRoutes = require('./routes/farmRoute');
app.use(express.urlencoded({ extended: true }));
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/usermodel');

const secret = 'tempsecret';

const sessionConfig = {
    name: 'session',
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig));

//passport middlewares
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use('/', userRoutes);
app.use('/', farmRoutes);

const dbUrl = 'mongodb://localhost:27017/farm-management';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});




app.get('/', (req, res) => {
    res.redirect("login")
})


// app.get('/signup', (req, res) => {
//     res.render("users/signup");
// })



app.listen(3000, () => {
    console.log("Now listening on port 3000");
})