import React from 'react'

//importing styles
import "./Contact.css"

//import component from react-scroll library
import {Link} from 'react-scroll'

const Contact = () => {
  return (
    <section className='contact'>
        <div className="contact__container">
            <h1 className="contact__title">Drones are the <br /> future of <br /> agriculture</h1>
            <h4 className="contact__about">Get a bird's eye view of your <br /> fields and get a more <br /> accurate estimation of crop <br /> yield.</h4>
            <Link to="contact" smooth={true} offset={-50} duration={500}><button className="contact__btn">Contact Us</button></Link>
        </div>
    </section>
  )
}

export default Contact
