const dotenv = require('dotenv')
dotenv.config();

const port = process.env.PORT || 3000;

const cors = require('cors');

const http = require('http');

const app = require('./app');
const connectToDb = require('./db/db');
connectToDb();

const { log } = require('console');

const server = http.createServer(app);


server.listen(port, ()=>{
    console.log(`server is running on port, ${port}`)
});
