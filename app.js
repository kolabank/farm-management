const express = require("express");
app = express();
const mongoose = require('mongoose');
app.use(express.static('public'));
app.set('view engine', 'ejs');
const userRoutes = require('./routes/userRoute');
app.use(express.urlencoded({ extended: true }));


app.use('/', userRoutes);

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


app.get('/signup', (req, res) => {
    res.render("users/signup");
})


// app.get('/login', (req, res) => {
//     res.render("users/login");
// })
app.listen(3000, () => {
    console.log("Now listening on port 3000");
})