import express from 'express'

const app = express()

const PORT = 3001

app.get('/', (req, res) =>{
    res.json({mensaje: 'Hola Mundo'})
})
app.get('/cerveza', (req, res) => {
    res.json({mensaje: 'Vamos por unas cervezas, yo invito!'})
})
app.post('/', (req, res) => {
    res.json({mensaje: 'Metodo Post'})
})
app.delete('/', (req, res) => {
    res.send({mensaje: 'Metodo Delete'})
})


app.listen(PORT)
console.log('API escuchando en el puerto' + PORT)