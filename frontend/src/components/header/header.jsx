import '../header/header.css';
import logo from '../../assets/img/logo_sin_fondo.png';
import { FaUserAstronaut } from "react-icons/fa";
import SplitTextContainer from '../header/splitTextContainer';

function Header(){
    return(
        <header className="header">
            <div className='headerContainer'>
                <img className='logoFitlab' src={logo} alt="logo-Fitlab"/>
                <p><SplitTextContainer/></p>
                <button className='botonIngresar'><FaUserAstronaut />Ingresar</button>
            </div>
        </header>
    )
}
export default Header
