require('./models/db');
const express = require('express');
const employeeController = require('./controllers/employeeController')
const path = require('path')
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser')
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts')}));
app.set('views', path.join(__dirname, '/views/'));
app.set('view engine', 'handlebars');

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
app.use('/employee', employeeController);