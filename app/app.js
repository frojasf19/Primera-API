import express from 'express'

const app = express()

const PORT = 3001

app.get('/', (req, res) =>{
    res.json({mensaje: 'Hola Mundo'})
})
app.get('/cerveza', (req, res) => {
    res.json({mensaje: 'Vamos por unas cervezas, yo invito!'})
})


app.listen(PORT)
console.log('API escuchando en el puerto' + PORT)