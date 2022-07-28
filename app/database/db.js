//importamos sequelize
import { Sequelize } from "sequelize";
//conectamos con la base de datos
const db = new Sequelize('database_app', 'root', 'Aspirine123', {
    host: 'localhost',
    dialect: 'mysql'
})

//exportamos la conexion con la base de datos
export default db