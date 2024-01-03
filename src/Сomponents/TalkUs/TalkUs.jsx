import React from 'react'

//imprting styles 
import "./TalkUs.css"

const TalkUs = () => {
  return (
    <div className='talk__us' id='contact'>
        <div className="talk__us__container">
            <div className="talk__us__grp">
                <h3 className="title__talk_us">CONTACT</h3>
                <h1 className="subtitle__talk_us">Talk to Us</h1>
            </div>
            <div className="talk__us__grp">
               <div className="post__img"></div> 
               <h1 className="talk__us__grp__title">Email</h1>
               <p className="talk__us__grp__contact">contact@skydrone.com.br</p>
            </div>
            <div className="talk__us__grp">
               <div className="phone__img"></div> 
               <h1 className="talk__us__grp__title">Phone</h1>
               <p className="talk__us__grp__contact">+55 51 99999-9999</p>
            </div>
            <div className="talk__us__grp">
               <div className="addres__img"></div> 
               <h1 className="talk__us__grp__title">Address</h1>
               <p className="talk__us__grp__contact">451-487 Quincy St, Maywood, IL 60153, USA</p>
            </div>
            <div className="map__grp">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20721.946706037717!2d23.195497699999997!3d49.517681550000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1703598289757!5m2!1suk!2sua" id="frame1" alt="maps" className='map'></iframe>
            </div>
        </div>
    </div>
  )
}

export default TalkUs
