import modelCerveza from "../models/models.js";

//definimos los metodos para el CRUD

//mostrar todas las cervezas

export const mostrarCervezas = async (req, res) => {
    try {
        const cervezas = await modelCerveza.findAll()
        res.json(cervezas)
    } catch (error) {
        res.json({message: error.message})
    }
}

//crear una nueva cerveza

export const crearCerveza = async (req, res) => {
    try {
        await modelCerveza.create(req.body)
        res.json({mensaje: 'Cerveza creada con exito'})
    } catch (error) {
        res.json({mensaje: 'Error al crear cerveza'})
    }
}

//buscar una cerveza por id
export const buscarCervezaId = async (req, res) =>{
    try {
        const cerveza = await modelCerveza.findAll({
            where:{
                id: req.params.id
            }
        })
        res.json(cerveza)
    } catch (error) {
        res.json({mensaje: 'Error de busqueda'})
    }
}

//buscar una cerveza por el nombre

export const buscarCervezaNombre = async (req, res) =>{
    try {
        const cerveza = await modelCerveza.findAll({
            where:{
                nombre: req.params.nombre
            }
        })
        res.json(cerveza)
    } catch (error) {
        res.json({mensaje: 'Error de busqueda'})
    }
}

//eliminar una cerveza

export const eliminarCerveza = async (req, res) => {
    try {
        await modelCerveza.destroy({
            where:{
                id: req.params.id
            }
        })
        res.json({message: 'Cerveza eliminada con exito'})
    } catch (error) {
        res.json({message: 'Error al eliminar la cerveza'})
    }
}

//actualizar una cerveza

export const actualizarCerveza = async (req, res) => {
    try {
        await modelCerveza.update(req.body, {
            where:{
                id: req.params.id
            }
        })
        res.json({message: 'Cerveza actualiza con exito'})
    } catch (error) {
        res.json({message: 'Error al actualizar la cerveza'})
    }
}