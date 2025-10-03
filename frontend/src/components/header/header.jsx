import '../header/header.css'; 
import logo from '../../assets/img/logo_sin_fondo.png';
import { FaUserAstronaut } from "react-icons/fa";
import { Cat } from 'lucide-react';
import SplitText from "./splitText";
import { Link } from 'react-router-dom';

function Header({ textUser, rutaBoton, textoBoton }) {
    return (
        <header className="header">
            <div className='headerContainer'>
                <Link to="/">
                    <img className='logoFitlab' src={logo} alt="logo-Fitlab"/>
                </Link>    
                <h2 className='textoBienvenida'>
                    <SplitText
                        text={`Bienvenido ${textUser}`}
                        className="textoBienvenida"
                        delay={100}
                        duration={0.8}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                    <Cat className='iconoAnimado'/>
                </h2>
                <Link to={rutaBoton}>
                    <button className='botonIngresar'>
                        <FaUserAstronaut />{textoBoton}
                    </button>
                </Link>
            </div>
        </header>
    )
}

export default Header;
