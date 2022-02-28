const {Router} = require("express");

const homeRouter = Router();

homeRouter
    .get('/home', (req, res) => {
        res.render('home/home');
    });

module.exports = {
    homeRouter
}