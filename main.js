const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static('public'))

const homeRoute = require('./routes/home.routes');
const contactRoute = require('./routes/contact.routes');
const servicesRoute = require('./routes/services.routes');

app.use(homeRoute);
app.use(contactRoute);
app.use(servicesRoute);


app.listen(3000, ()=> {console.log("listening at http://localhost:3000")})