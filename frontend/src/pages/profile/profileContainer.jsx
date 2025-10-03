import { useEffect, useState } from "react";
import Profile from "./profile";


export default function ProfileContainer() {
  const [usuario, setUsuario] = useState(null);
    useEffect(() => {
        const datosGuardados = localStorage.getItem("usuario");
        if (datosGuardados) {
        setUsuario(JSON.parse(datosGuardados));
        }
    }, []);

    const cerrarSesion = () => {
        localStorage.removeItem("usuario");
        window.location.href = "/";
    };

  return <Profile usuario={usuario} cerrarSesion={cerrarSesion} />;
}
