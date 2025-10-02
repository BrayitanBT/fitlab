import { useState } from "react";
import Registrar from "./registro";
import '../../assets/css/formSignup.css'
export default function FormContainer({}){
    const [Name,setName]=useState('')
    const [Telephone,setTelephone]=useState('')
    const [Email,setEmail]=useState ('')
    const API = 'http://localhost/8000'

    const handleSubmit= async (e)=>{
        e.preventDefault()
        const data = {
            Nom:Name,
            Tel:Telephone,
            Cor:Email
        }
        try{
            const res = await fetch (`${API}/crearUsuario`,{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            })
            if(res.ok){
                const resData=await res.json()
                alert(resData.message)
                setName('')
                setTelephone('')
                setEmail('')
            }
        }
        catch(err){
            console.error(err)
        }
    }
    //Usamos useEffect para cuando algo precarga
    return(
        <Registrar 
            handleSubmit ={handleSubmit}
            setName={setName}
            setTelephone={setTelephone}
            setEmail={setEmail}
        />
    )
}