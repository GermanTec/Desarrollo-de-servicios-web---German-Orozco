const mongoose=require('mongoose');

mongoose.connect(
    `mongodb+srv://German:12345@Pelicula.u2gty2q.mongodb.net/pelicula-bd?retryWrites=true&w=majority`
    ).then(()=>console.log('Conexion exitosa en mongo')).catch(err=>console.error('Error al conectar a MongoDB:',err));

module.exports=mongoose;
    