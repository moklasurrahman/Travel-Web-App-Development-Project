import React from 'react'
import Hero from '../components/Hero'
import TourType from '../components/TourType'
import WhyChoose from '../components/WhyChoose'
import TopDestination from '../components/TopDestination'
import Featured from '../components/Featured'
import WhyBest from '../components/WhyBest'
import Testimonial from '../components/Testimonial'
import PhotoGallery from '../components/PhotoGallery'

const Home = () => {
  return (
    <main>
        <Hero/>
        <TourType/>
        <WhyChoose/>
        <TopDestination/>
        <Featured/>
        <WhyBest/>
        <Testimonial/>
        <PhotoGallery/>
    </main>
  )
}

export default Home