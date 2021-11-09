const express = require('express');
const debug = require('debug')('app:main');
const { Config } =require("./src/config/index");
const { ProductsAPI } = require('./src/products/index');
const { UsersAPI } = require('./src/users/index');

const app = express();

app.use(express.json());

//modulos

ProductsAPI(app);
UsersAPI(app);

app.listen(Config.port,()=>{
    console.log(`Servidor escuchando en el puerto ${Config.port}`);
});