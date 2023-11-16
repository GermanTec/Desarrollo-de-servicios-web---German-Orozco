const express=require('express')
const Router=express.Router()
const peliculasController=require('../Controllers/pelicula_Controller')
const authMiddleware = require('../utils/auth.middleware')

Router.get('/',peliculasController.getPeliculas)
Router.get('/:peliculaId',peliculasController.getByIdPelicula)
Router.post('/',authMiddleware.authenticateToken,peliculasController.newPelicula);
//Router.post('/',peliculasController.newPelicula)
Router.put('/:peliculaId',authMiddleware.authenticateToken,peliculasController.updatePelicula)
Router.delete('/:peliculaId',authMiddleware.authenticateToken,peliculasController.deletePelicula)

module.exports=Router;