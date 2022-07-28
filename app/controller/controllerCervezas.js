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


//buscar una cerveza

export const buscarCerveza = async (req, res) =>{
    try {
        const cer = req.query.cer
        const cerveza = await modelCerveza.findAll({
            where:{
                cer
            }
        })
        res.json(cerveza)
    } catch (error) {
        res.json({mensaje: 'Error de busqueda'})
    }
}
