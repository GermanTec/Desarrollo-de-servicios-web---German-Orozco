const mongose = require('mongoose');

let peliculaSchema=new mongose.Schema({
    id:{type:Number},
    nombre:{type:String},
    director:{type:String},
    año:{type:Number},
    duracion:{type:Number},
    genero:{type:String}
});

module.exports=mongose.model('Pelicula',peliculaSchema,'pelicula');

/*
{
    "id":"1",
    "nombre": "La venganza",
    "director": "",
    "año":2023,
    "duracion":2,
    "genero":"Terror"
}
*/