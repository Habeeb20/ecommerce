const express = require('express');
const app = express();


const bodyparser = require("body-parser")



const PORT = process.env.PORT || 5000;
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static("public"));
app.set("veiw engine", "ejs");




app.get('/index', (req, res, next) => {
    res.render("index.ejs")
})


app.get('/newpage', (req, res, next) => {
    res.render("newpage.ejs")
})


app.get('/page', (req, res, next) => {
    res.render("page.ejs")
})

app.get('/cart', (req, res, next) => {
    res.render("cart.ejs")
})



app.get('/vanilla', (req, res, next) => {
    res.render("vanilla.ejs")
})







app.get('/slide', (req, res, next) => {
    res.render("slide.ejs")
})







app.use((req, res, next) => {
    res.status(200).json ({
        message: "hello its working"
    });
});

app.use((req, res, next) => {
    const error = new error ("not available")
    error.status = 404
    next(error)
})



app.listen(PORT, () => console.log ("server listening on port " + PORT))