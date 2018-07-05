var {Pool, Client} = require('pg');

function createDBConnection(){
  if (!process.env.NODE_ENV) {
    const client = new Client({
       user: 'postgres',
       host: 'localhost',
       password : '1234',
       port: '5432',
       database : 'casadocodigo'
    });

    return client;
  } 

  if (process.env.NODE_ENV == 'test'){
    const client = new Client({
       user: 'postgres',
       host: 'localhost',
       password : '1234',
       port: '5432',
       database : 'casadocodigo_test'
    });

    return client;
  }

}

//wrapper
module.exports = function(){
    return createDBConnection;
}