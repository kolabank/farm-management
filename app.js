const express = require("express");
app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.redirect("login")
})


app.get('/signup', (req, res) => {
    res.render("signup");
})


app.get('/login', (req, res) => {
    res.render("login");
})
app.listen(3000, () => {
    console.log("Now listening on port 3000");
})