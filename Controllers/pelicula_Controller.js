exports.getPeliculas=(req,res)=>{
    try {
        return res.status(200).json({
            message:"Consulta de todas las peliculas con exito"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error al consultar todas las peliculas",
            data:error
        })
    }
}

exports.getByIdPelicula=(req,res)=>{
    try {
        const peliculaId=req.params.peliculaId
        return res.status(200).json({
            message:"Exito al consultar pelicula con id:"+peliculaId
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error al consultar pelicula",
            data:error
        })
    }
}

exports.newPelicula=(req,res)=>{
    try {
        const newPelicula=req.body
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

exports.updatePelicula=(req,res)=>{
    try {
        const peliculaId=req.params.peliculaId
        const newPelicula=req.body
        return res.status(200).json({
            message:"Exito pelicula actualizada con el id:"+peliculaId,
            data:this.updatePelicula
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error al actualizar pelicula",
            data:error
        })
        
    }
}

exports.deletePelicula=(req,res)=>{
    try {
        const peliculaId=req.params.peliculaId
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