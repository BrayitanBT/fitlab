import '../home/home.css'
import HeaderContainer from "../../components/header/headerContainer"
import Carousel from "../../components/carousel/carouselContainer"
import CardContainer from '../../components/card/cardContainer'
import Footer from '../../components/footer/footer'
import Hero from '../../components/hero/hero'
import Categories from '../../components/categories/categories'
import Features from '../../components/features/features'
import Collections from '../../components/collections/collections'
const Home = ()=>{
    return(
        <div>
            <HeaderContainer/>
            <Hero/>
            <Categories/>
            <div className="products-header">
                <h2 className="products-title">Conoce nuestros produtos</h2>
                <p className="products-subtitle">
                    Tenemos una amplia gama de productos para que no te pierdas ninguno
                </p>
            </div>
            <CardContainer/>
            <Collections/>
            <Features/>
            <Footer/>      
        </div>
        
    )
}
export default Home;




