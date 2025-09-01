const express  = require("express");
const app = express();


app.get('/', (req, res)=> {
    res.send('Lets Start everything Again...')
})




module.exports = app;