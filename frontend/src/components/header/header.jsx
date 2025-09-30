import '../../assets/css/header.css';
import logo from '../../assets/img/logo_sin_fondo.png';
import { FaUserAstronaut } from "react-icons/fa";
import WelcomeText from './WelcomeText'

function Header(){
    return(
        <header className="header">
            <div className='headerContainer'>
                <img className='logoFitlab' src={logo} alt="logo-Fitlab"/>
                <p><WelcomeText/></p>
                <button className='botonIngresar'><FaUserAstronaut />Ingresar</button>
            </div>
        </header>
    )
}

export default Header
