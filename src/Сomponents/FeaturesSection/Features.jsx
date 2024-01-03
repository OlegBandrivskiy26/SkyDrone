import React from 'react'

// importing styles
import "./Features.css"

const Features = () => {
  return (
    <section id='features'>
        <div className="features__container">
            <div className="features__img"></div>
            <div className="features__content__container">
                <h2 className="features__title__yellow">MODERN TECHNOLOGY</h2>
                <h1 className="features__title">More than just a <br /> drone company</h1>
                <div className="features__list__grp">
                    <div className="point"></div>
                    <h3 className="list__title">Modern machinery</h3>
                    <p className="list__txt">Skydrones are designed for large- <br /> scale farming operations, so that you <br /> can always stay on top of your farm's <br /> health.</p>
                </div>
                <div className="features__list__grp">
                    <div className="point__grp">
                        <div className="point point__right"></div>
                        <div className="point"></div>
                    </div>
                    <h3 className="list__title">Save time and money</h3>
                    <p className="list__txt">With easy-to-use and cost-effective <br /> aerial data collection, Skydrone <br /> makes it easy to monitor crops and <br />  livestock.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features
