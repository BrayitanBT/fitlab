import { Cat } from 'lucide-react';
import SplitText from "../../containers/header/splitTextContainer";
import '../../assets/css/header.css';
function WelcomeText (){
    const textUser = 'Brayan y Daniel'
    return(
        <p className='textoBienvenida'>
            <SplitText
                    text={`Bienvenidos ${textUser}`}
                    className="textoBienvenida"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
            <Cat className='iconoAnimado'/>
        </p>
    )
}
export default WelcomeText;