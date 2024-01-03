import React from 'react'

//importing styles
import "./Main.css"

//importing components
import WelcomePage from '../WelcomePage/WelcomePage'
import Clients from '../ClientsSection/Clients'
import Features from '../FeaturesSection/Features'
import Testimonial from '../Testimonial/Testimonial'
import FeaturesSecond from '../FeaturesSecond/FeaturesSecond'
import Contact from '../ContactSection/Contact'
import TalkUs from '../TalkUs/TalkUs'
import Footer from '../Footer/Footer'
import AppSection from '../AppSection/AppSection'

const Main = ({setBurgerIsOpen}) => {
  return (
    <div className='main'>
        <WelcomePage setBurgerIsOpen={setBurgerIsOpen}/>
        <Clients/>
        <Features/>
        <Testimonial/>
        <FeaturesSecond/>
        <Contact/>
        <AppSection/>
        <TalkUs/>
        <Footer/>
    </div>
  )
}

export default Main
