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

//Ruta para registrarse
app.post('/createUser',async (req,res)=>{
    const {Nom,Cor,Pas}=req.body
    try{
        connect = await mysql.createConnection(db)
        //Aquí se puede agregar condiciones por si el usuario existe
        await connect.execute('INSERT INTO User(name,email,password) VALUES(?,?,?)',[Nom,Cor,Pas])
            return res.status(201).json({
            success:true,
            message:'Usuario creado exitosamente ✅'
            })
    }
    catch(err){
        console.error(err)
    }
    finally{
        if(connect) await connect.end()
    }
})


//Ruta para iniciar sesión 
app.post('/loginUser', async (req, res) => {
  const { email, password } = req.body;
  let connection;

  try {
    connection = await mysql.createConnection(db);
    const [rows] = await connection.execute(
        'SELECT id, name, email, rol FROM User WHERE email = ? AND password = ?',
        [email, password]
    );

    if (rows.length > 0) {
      const user = rows[0];
      res.status(200).json({
        id: user.id,
        nombre: user.name,
        email: user.email,
        rol: user.rol || 'cliente'
      });
    } else {
      res.status(401).json({ error: 'Correo o contraseña incorrectos' });
    }
  } catch (err) {
    console.error('Error en login:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  } finally {
    if (connection) await connection.end();
  }
});

//Puerto del servidor 
app.listen(port,()=>{
    console.log(`Server running on server ${port}`)
})