import express from 'express'
import { buscarCervezaId, buscarCervezaNombre, crearCerveza, mostrarCervezas } from '../controller/controllerCervezas.js'

const router = express()

router.get('/', mostrarCervezas)

router.get('/:nombre', buscarCervezaNombre)
router.get('/search/:id', buscarCervezaId)

router.post('/', crearCerveza)

router.put('/', (req, res) => {
    res.json({mensaje: 'Vas a actualizar una cerveza'})
})
router.delete('/:id', (req, res) => {
    res.json({mensaje: 'Vas a eliminar una cerveza' + req.params.id})
})

export default router