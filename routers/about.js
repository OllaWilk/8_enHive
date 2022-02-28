const {Router} = require("express");

const aboutRouter = Router();

aboutRouter
    .get('/about', (req, res) => {
        res.render('about/about')
    });

    module.exports = {
        aboutRouter
    }