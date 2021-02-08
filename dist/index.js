"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("./router/router"));
const server_1 = __importDefault(require("./server/server"));
// import swaggerUi from 'swagger-ui-express';
// import * as swaggerDocument from './swagger.json';
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./../swagger.json');
const server = server_1.default.init(3000);
// server.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
server.app.use(router_1.default);
//const mysql = new MySQL();
//MySQL instance
//MySQL.instance;
server.start(() => {
    console.log('Servidor corriendo en el puerto 3000');
});
