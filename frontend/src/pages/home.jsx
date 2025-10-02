import '../pages/home.css'
import HeaderContainer from "../components/header/headerContainer"
import Carousel from "../components/carousel/carouselContainer"
import CardContainer from '../components/card/cardContainer'
import Footer from '../components/footer/footer'
const Home = ()=>{
    return(
        <div>
                <HeaderContainer/>
                <Carousel/>
                <CardContainer/>            
                <Footer/>          
        </div>
    )
}
export default Home;