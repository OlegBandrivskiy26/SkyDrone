import React from 'react'

//importing styles
import "./AppSection.css"

const AppSection = () => {
  return (
    <section className="app" id='download'>
        <div className="app__container">
            <h1 className="app__title">Download our app</h1>
            <h4 className="app__about">We're an agtech company with a clear mission: to revolutionize farming by using AI and drone technology.</h4>
            <button className="btn__appstore"></button>
            <button className="btn__playmarket"></button>
        </div>
    </section>
  )
}

export default AppSection
