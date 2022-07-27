import express from 'express'

const app = express()

const PORT = 3001

app.get('/', (req, res) =>{
    res.json({mensaje: 'Hola Mundo'})
})


app.listen(PORT)
console.log('API escuchando en el puerto' + PORT)