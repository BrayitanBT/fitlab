import { useState } from "react";
import SignUp from "./signUp";
import { useNavigate } from 'react-router-dom';

export default function SignUpContainer({}){

    const [Name,setName]=useState('')
    const [Password,setPassword]=useState('')
    const [Email,setEmail]=useState ('')
    const navigate = useNavigate();

    const handleSubmit= async (e)=>{
        e.preventDefault()
        const data = {
            Nom:Name,
            Pas:Password,
            Cor:Email
        }
        try{
            const res = await fetch ('http://localhost:8000/createUser',{
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
                setPassword('')
                setEmail('')
                navigate('/');
            }
        }
        catch(err){
            console.error(err)
        }
    }
    //Usamos useEffect para cuando algo precarga
    return(
        <SignUp 
            handleSubmit ={handleSubmit}
            setName={setName}
            setPassword={setPassword}
            setEmail={setEmail}
        />
    )
}