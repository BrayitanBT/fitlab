import { Cat } from 'lucide-react';
import SplitTextContainer from "./splitTextContainer";
import '../header/header.css';
function SplitText (){
    const textUser = 'Visitante'
    return(
        <div className='textoBienvenida'>
            <SplitTextContainer
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
        </div >
    )
}
export default SplitText;