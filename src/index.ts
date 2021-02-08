
import router from './router/router';
import Server from './server/server';
import MySQL from './mysql/mysql';
// import swaggerUi from 'swagger-ui-express';
// import * as swaggerDocument from './swagger.json';

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./../swagger.json');
const server = Server.init(3000);

// server.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


server.app.use(router);

//const mysql = new MySQL();
//MySQL instance
//MySQL.instance;



server.start(()=>{

    console.log('Servidor corriendo en el puerto 3000');
})

