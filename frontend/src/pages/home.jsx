import ProductCard from "../components/card/card";
import Footer from "../components/footer/footer";
import Carousel from "../containers/carousel/carouselContainer";
import HeaderContainer from "../containers/header/headerContainer";
import '../assets/css/home.css'
const Home = ()=>{
    return(
        <div>
            <header>
                <HeaderContainer/>
            </header>
            <section className="carouselContainer">
                <Carousel/>
            </section>
            <section>
                <ProductCard/>
            </section>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
export default Home;