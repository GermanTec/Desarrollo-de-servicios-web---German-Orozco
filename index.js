const express=require('express')
const morgan=require('morgan')

require('./utils/mongoConnection')

const peliculaRouter=require('./Routers/pelicula_Router')

const app=express()
const port=3003

app.use(morgan('dev'))
app.use(express.json({limit:'50mb'}))

app.use('/peliculas',peliculaRouter)

app.get('/',(req,res)=>{
    res.send("Bienvenidoo a Peliculas API")
})

app.listen(port,()=>{
    console.log("Servidor iniciado en http://localhost:"+port)
})