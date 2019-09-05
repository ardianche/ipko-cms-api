const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

const oracledb = require('oracledb');
const dbConfig = require('./config/database.js');

const AuthenticationRouter = require('./src/routes/AuthenticationRouter.js');


let connection;

(async ()=>{
    connection = await oracledb.getConnection(dbConfig);
});
app.use('/authenticate',new AuthenticationRouter(connection).handleRoutes());
app.listen(port, hostname, async () => { 
   console.log(`Server running at http://${hostname}:${port}/`);
});