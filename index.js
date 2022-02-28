const express = require ("express");
const methodOverride = require ("method-override");
const {engine} = require ('express-handlebars');


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
app.get('/', (req, res) => {
    // res.render('public');
    res.render('viewOne/viewOne');
});

app.listen(3000, 'localhost', () => {
    console.log('Listening on port http://localhost:3000 ')
});



