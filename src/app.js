const express = require('express');
const routes = require('./routes');
require('dotenv').config()

const PORT = process.env.PORT

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use('/', routes)

app.listen(PORT || 8888, ()=>{
    console.log(`Server running on port ${PORT}`);
});