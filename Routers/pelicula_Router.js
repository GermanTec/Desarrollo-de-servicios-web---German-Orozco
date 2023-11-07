const express=require('express')
const Router=express.Router()
const peliculasController=require('../Controllers/pelicula_Controller')

Router.get('/',peliculasController.getPeliculas)
Router.get('/:peliculaId',peliculasController.getByIdPelicula)
Router.post('/',peliculasController.newPelicula)
Router.put('/:peliculaId',peliculasController.updatePelicula)
Router.delete('/:peliculaId',peliculasController.deletePelicula)

module.exports=Router;