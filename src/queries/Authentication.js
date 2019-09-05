const connection = require('../../config/connection.js');

class Authentication{
    constructor(connection){
        this.connection = connection;
    }

    getUsers(){
        this.connection;
    }
}


module.exports = Authentication;