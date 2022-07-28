//importamos la conexion con la base de datos

import db from "../database/db.js";

//importamos DataTypes de sequelize

import { DataTypes } from "sequelize";

//definimos el modelo de la cerveza 

const modelCerveza = db.define('cervezas',{
    nombre:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.STRING
    },
    graduacion:{
        type: DataTypes.STRING
    },
    envace:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.STRING
    }
})

export default modelCerveza