const {Router} = require("express");

const mainRouter = Router();

mainRouter
    .get('/', (req, res) => {
        res.redirect('/home');
    });

module.exports = {
    mainRouter
}