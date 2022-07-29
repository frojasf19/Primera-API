import express from 'express'
import { actualizarCerveza, buscarCervezaId, buscarCervezaNombre, crearCerveza, eliminarCerveza, mostrarCervezas } from '../controller/controllerCervezas.js'

const router = express()

router.get('/', mostrarCervezas)

router.get('/:nombre', buscarCervezaNombre)

router.get('/search/:id', buscarCervezaId)

router.post('/', crearCerveza)

router.put('/:id', actualizarCerveza)

router.delete('/:id', eliminarCerveza)

export default router