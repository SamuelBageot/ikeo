import Contact from "../../components/HomePage/Contact/Contact";
import FeaturedProducts from "../../components/HomePage/FeaturedProducts/FeaturedProducts";
import HeroBanner from "../../components/HomePage/HeroBanner/Herobanner";
import Services from "../../components/HomePage/Services/Services";

const Home = () => {
    return (
        <>
            <HeroBanner />
            <FeaturedProducts />
            <Services />
            <Contact />
        </>
    )
};

export default Home;