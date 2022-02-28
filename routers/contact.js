const {Router} = require("express");

const contactRouter = Router();

contactRouter
    .get('/contact', (req,res) => {
        res.render('contact/contact')
    });

module.exports = {
    contactRouter
}