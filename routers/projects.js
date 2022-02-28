const {Router} = require("express");

const projectsRouter = Router();

projectsRouter
    .get('/projects', (req,res) => {
        res.render('projects/projects')
    });

module.exports = {
    projectsRouter
}