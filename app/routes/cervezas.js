import express from 'express'
import { buscarCerveza, crearCerveza, mostrarCervezas } from '../controller/controllerCervezas.js'

const router = express()

router.get('/', mostrarCervezas)

 router.get('/:id', (req, res) => {
    res.json({ message: 'Vas a tomar la cerveza numero' + req.params.id })
  })
router.get('/search', buscarCerveza)

router.post('/', crearCerveza)

router.put('/', (req, res) => {
    res.json({mensaje: 'Vas a actualizar una cerveza'})
})
router.delete('/:id', (req, res) => {
    res.json({mensaje: 'Vas a eliminar una cerveza' + req.params.id})
})

export default router