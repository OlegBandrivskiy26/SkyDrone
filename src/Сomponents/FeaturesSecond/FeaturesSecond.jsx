import React from 'react'

//importing styles 
import "../FeaturesSection/Features.css"

const FeaturesSecond = () => {
  return (
    <div>
      <section>
        <div className="features__container">
            <div className="features__content__container">
                <h2 className="features__title__yellow">POWERFUL SIMPLICITY</h2>
                <h1 className="features__title">Enter the future of <br /> farming</h1>
                <div className="features__list__grp">
                    <div className="point__grp">
                        <div className="point point__right"></div>
                        <div className="point point__right"></div>
                        <div className="point"></div>
                    </div>
                    <h3 className="list__title">Pest control</h3>
                    <p className="list__txt">We provide all the data you need to <br /> know about your crops in just a few <br /> clicks.</p>
                </div>
                <div className="features__list__grp">
                    <div className="point__grp">
                        <div className="point point__right"></div>
                        <div className="point point__right"></div>
                        <div className="point point__right"></div>
                        <div className="point"></div>
                    </div>
                    <h3 className="list__title">AI-powered scanning</h3>
                    <p className="list__txt">With easy-to-use and cost-effective <br /> aerial data collection, Skydrone <br /> makes it easy to monitor crops and <br />  livestock.</p>
                </div>
            </div>
            <div className="features__img__second"></div>
        </div>
    </section>
    </div>
  )
}

export default FeaturesSecond
