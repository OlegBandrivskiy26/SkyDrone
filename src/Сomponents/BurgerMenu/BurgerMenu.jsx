//importing hooks  and react
import React, {useEffect} from 'react'

//importing styles
import "./BurgerMenu.css"

//import AOS library
import AOS from 'aos';
import 'aos/dist/aos.css';

//import component from react-scroll library
import {Link} from 'react-scroll'

const BurgerMenu = ({setBurgerIsOpen}) => {
  //calling AOS library
  useEffect(() => {
    AOS.init();
  }, [])
  //closing burger menu
  const closeBurger = () =>{
    setBurgerIsOpen(false)
  }
  return (
    <div className='burger__menu' data-aos="fade-down-left" data-aos-duration="1000">
        <Link onClick={closeBurger} className="burger__menu__items" to="clients" smooth={true} offset={-100} duration={1000}>Clients</Link>
        <Link onClick={closeBurger} className="burger__menu__items" to="features" smooth={true} offset={-50} duration={500}>Features</Link>
        <Link onClick={closeBurger} className="burger__menu__items" to="download" smooth={true} offset={-50} duration={500}>Download App</Link>
    </div>
  )
}

export default BurgerMenu
