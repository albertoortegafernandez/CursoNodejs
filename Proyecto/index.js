const express = require('express');
const debug = require('debug')('app:main');
const { Config } =require("./src/config/index");


const app = express();

app.use(express.json());

//modulos

app.listen(Config.port,()=>{
    console.log(`Servidor escuchando en el puerto ${Config.port}`);
});