import bodyParser from 'body-parser'
import express from 'express'
import router from './routes/cervezas.js'

const app = express()
app.use(bodyParser.json())

const PORT = 3001

app.use('/', router)



app.listen(PORT)
console.log('API escuchando en el puerto' + PORT)