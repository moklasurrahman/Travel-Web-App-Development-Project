import { useTitle } from '../Hook'
import FeaturedProduct from '../components/FeaturedProduct'
import Hero from '../components/Hero'
import ProductGallery from '../components/ProductGallery'
import Testimonial from '../components/Testimonial'
import TrendingProducts from '../components/TrendingProducts'


const Home = () => {
  useTitle('Home');

  return (
    <main>
        <Hero/>
        <FeaturedProduct/>
        <ProductGallery/>

        <TrendingProducts/>
        <Testimonial/>

        {/* <EmailNewsLetter/> */}
        
    </main>
  )
}

export default Home