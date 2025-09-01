const express  = require("express");
const app = express();


app.get('/', (req, res)=> {
    res.send('Zamper is live....')
})




module.exports = app;