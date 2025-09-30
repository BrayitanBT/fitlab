

export default function Registrar({handleSubmit, setName, setTelephone, setEmail}){
    return(
        <div>
            <h1>Sign up</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Nom">Name:</label>
                        <input type="text" name="Nom" onChange={(e)=>setName(e.target.value)} id=""/>
                    <label htmlFor="Tel">Telefono:</label>
                        <input type="text" name="Tel" onChange={(e)=>setTelephone(e.target.value)} id=""/>
                    <label htmlFor="Cor">Correo:</label>
                        <input type="email" name="Cor" onChange={(e)=>setEmail(e.target.value)} id=""/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}