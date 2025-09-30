const express = require ('express')
const bodyParser = require ('body-parser')
const cors = require ('cors')
const mysql = require ('mysql2/promise')

var app = express ()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const port = 8000 

const db={
    host:'localhost',
    user:'root',
    password: '',
    database: 'fitlab'
}


app.post('/crearUsuario',async (req,res)=>{
    const {Nom,Tel,Cor}=req.body
    try{
        connect = await mysql.createConnection(db)
        //Aquí se puede agregar condiciones por si el usuario existe
        await connect.execute('INSERT INTO User(Name,Telephone,Email) VALUES(?,?,?)',[Nom,Tel,Cor])
            return res.status(201).json({
            success:true,
            message:'User created sucessfully'
            })
    }
    catch(err){
        console.error(err)
    }
    finally{
        if(connect) await connect.end()
    }
})

app.listen(port,()=>{
    console.log(`Server running on server ${port}`)
})