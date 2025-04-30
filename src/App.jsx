import React from 'react'
import Navbar from './Navbar/Navbar'
import bgVideo from './assets/zc.mp4'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Banner from './Banner/Banner'
import Testimonial from './Testimonial/Testimonial'
import Footer from './Footer/Footer'
const App = () => {
  return (
    <div>
      <div className= 'h-[700px] relative'>
      <video 
      className='fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]
      '
      autoPlay muted loop>
        <source  src={bgVideo} type="video/mp4"/>
      </video>
      <div className="absolute inset-0 bg-black/60 z-[-1]" />
    
        <Hero/>
    </div>
    <Services/>
    <Banner/>
    <Testimonial/>
    <Footer/>
</div>

  )
}

export default App