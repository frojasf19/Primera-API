import bodyParser from 'body-parser'
import express from 'express'
import router from './routes/cervezas.js'
import db from './database/db.js'
import cors from 'cors'


const app = express()
app.use(bodyParser.json())
app.use(cors())
const PORT = 3001

app.use('/', router)

try {
    await db.authenticate()
    console.log('conexion exitosa a la base de datos')
} catch (error) {
    console.log(`el error de la conexion es: ${error}`)
}


app.listen(PORT)
console.log('API escuchando en el puerto' + PORT)