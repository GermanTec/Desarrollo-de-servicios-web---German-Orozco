const Pelicula=require('../Models/pelicula_model');

exports.getPeliculas= async (req,res)=>{
    try {
        const pelicula=await Pelicula.find();
        return res.status(200).json({
            message:"Consulta de todas las peliculas con exito",
            data:pelicula
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error al consultar todas las peliculas",
            data:error
        })
    }
}

exports.getByIdPelicula= async (req,res)=>{
    const peliculaId=req.params.peliculaId;
    try {
        const pelicula=await Pelicula.findById(peliculaId)
        return res.status(200).json({
            message:"Exito al consultar pelicula con id:"+peliculaId,
            data:pelicula
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error al consultar pelicula",
            data:error
        })
    }
}

exports.newPelicula= async (req,res)=>{
    try {
        const{id,nombre,director,año,duracion,genero}=req.body
        const newPelicula=new Pelicula({id,nombre,director,año,duracion,genero})
        await newPelicula.save()
        return res.status(200).json({
            message:"Exito por crear pelicula",
            data:newPelicula
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error al crear pelicula",
            data:error
        })
    }
}

exports.updatePelicula= async (req,res)=>{
    const peliculaId=req.params.peliculaId
    const newData=req.body
    try {
        const updatePelicula=await Pelicula.findByIdAndUpdate(peliculaId,newData,{new:true})
        return res.status(200).json({
            message:"Exito pelicula actualizada con el id:"+peliculaId,
            data:updatePelicula
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error al actualizar pelicula",
            data:error
        })
        
    }
}

exports.deletePelicula= async (req,res)=>{
    const peliculaId=req.params.peliculaId
    try {
        await Pelicula.findByIdAndDelete(peliculaId)
        return res.status(200).json({
            message:"Exito pelicula eliminada con id:"+peliculaId
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error pelicula no eliminada",
            data:error
        })       
    }
}