import React from 'react'

//importing styles
import "./Footer.css"

//import component from react-scroll library
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <footer>
        <div className="footer__container">
            <div className="logo__footer"></div>
            <div className="social__medias">
                <div className="instagram"></div>
                <div className="facebook"></div>
                <div className="youtube"></div>
            </div>
            <div className="footer__nav">
                <Link to="clients" smooth={true} offset={-50} duration={500}><h4 className="nav__elements">Clients</h4></Link>
                <Link to="features" smooth={true} offset={-50} duration={500}><h4 className="nav__elements">Features</h4></Link>
                <Link to="download" smooth={true} offset={-50} duration={500}><h4 className="nav__elements">Download App</h4></Link>
            </div>
            <hr className='footer__hr' />
            <div className="footer__about">
                <h5 className="footer__subtitle">Privacy Policy</h5>
                <h5 className="footer__subtitle">Terms of Service</h5>
                <h5 className="footer__subtitle">Cookies Settings</h5>
                <h5 className="footer__subtitle">Copyright © 2022. SkyDrone by <br /> @apta.agency</h5>
            </div>
        </div>
    </footer>
  )
}

export default Footer
