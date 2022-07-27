import express from 'express'

const router = express()

router.get('/', (req, res) => {
    res.json({ message: 'Ven! tomemos una cerveza' })
  })
 router.get('/:id', (req, res) => {
    res.json({ message: 'Vas a tomar la cerveza numero' + req.params.id })
  })
router.get('/search', (req, res) => {
    res.json({ message: 'Vas a buscar una cerveza' })
  })
router.post('/', (req, res) => {
    res.json({mensaje: 'Vas a añadir una cerveza'})
})
router.put('/', (req, res) => {
    res.json({mensaje: 'Vas a actualizar una cerveza'})
})
router.delete('/:id', (req, res) => {
    res.json({mensaje: 'Vas a eliminar una cerveza' + req.params.id})
})

  export default router