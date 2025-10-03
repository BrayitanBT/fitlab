import { useEffect, useState } from 'react';
import Header from './header';

export default function HeaderContainer() {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const datos = localStorage.getItem('usuario');
        if (datos) {
            setUsuario(JSON.parse(datos));
        } else {
            setUsuario(null);
        }
    }, []);

    const textUser = usuario ? usuario.nombre : 'Visitante';
    const textoBoton = usuario ? 'Perfil' : 'Ingresar';
    const rutaBoton = usuario ? '/profile' : '/log-in';

    return (
        <Header
            textUser={textUser}
            textoBoton={textoBoton}
            rutaBoton={rutaBoton}
        />
    );
}
