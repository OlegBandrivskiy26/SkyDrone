//importing styles
import "./WelcomePage.css"

//import component from react-scroll library
import {Link} from 'react-scroll'

const WelcomePage = ({setBurgerIsOpen}) => {

    const burgerOpen = () =>{
        setBurgerIsOpen(true);
    }
   
    return (
    <div className='welcome__page'>
        <header>
            <div className="logo"></div>
            <div onClick={burgerOpen} className="burger">
                <div className="burger__element burger__element__top"></div>
                <div className="burger__element burger__element__center"></div>
                <div className="burger__element burger__element__end"></div>
            </div>
        </header>
        <div className="welcome__page__content">
            <div className="welcome__page__content__container">
                <h1 className="title__welcome">Saving the world and <br /> growing crops</h1>
                <h3 className="subtitle__welcome">
                    Skydrone's innovative drone <br /> 
                    technology is bringing the latest <br />
                    farming innovations to farms around <br />
                    the world.
                </h3>
                <Link to="contact" smooth={true} offset={-50} duration={500}><button className='btn__contact'>Contact Us</button></Link>
            </div>
        </div>
    </div>
  )
}

export default WelcomePage
