const express = require('express');
const router = express.Router();
const Authentication = require('../queries/Authentication.js');


class AuthenticationRouter{
    constructor(connection){
        this.connection = connection;
        this.authInstance = new Authentication(connection);
    }

 handleRoutes(){
        router.post('/log-in',(req,res)=>{
            console.log('test');
            res.send('test');
        });
        
        router.post('/sign-up',(req,res)=>{
        
        });
        return router;
    }
}

module.exports = AuthenticationRouter;