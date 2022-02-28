const express = require ("express");
const methodOverride = require ("method-override");
const {engine} = require ("express-handlebars");
const {mainRouter} = require ("./routers/main");
const {homeRouter} = require ("./routers/home");
const { projectsRouter } = require("./routers/projects");
const { aboutRouter } = require("./routers/about");
const { contactRouter } = require("./routers/contact");


const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
app.use(express.json());
app.engine('.hbs', engine ({
    extname: '.hbs',
}));
app.set('view engine', '.hbs');
app.get('/', mainRouter);
app.get('/home', homeRouter);
app.get('/projects', projectsRouter);
app.get('/about', aboutRouter);
app.get('/contact', contactRouter);

app.listen(3000, 'localhost', () => {
    console.log('Listening on port http://localhost:3000 ')
});
