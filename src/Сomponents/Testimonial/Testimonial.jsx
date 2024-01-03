import React from 'react'

//importing styles
import "./Testimonial.css"

//importing embla-carusel library
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Testimonial = () => {
  //using embla-crusel library
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
  return (
    <section className='embla'  ref={emblaRef}>
        <div className="embla__container">
            <div className="embla__slide">
              <div className="customer__img"></div>
              <h4 className="customer__name">Customer name</h4>
              <h5 className="customer__company">Position, Company name</h5>
              <p className="customer__testimonial">
                  "A customer testimonial that <br />
                  highlights features and <br />
                  answers potential customer <br />
                  doubts about your product or <br />
                  service. Showcase <br />
                  testimonials from a similar <br />
                  demographic to your <br />
                  customers."
              </p>
            </div>
            <div className="embla__slide">
              <div className="customer__img2"></div>
              <h4 className="customer__name">Customer name</h4>
              <h5 className="customer__company">Position, Company name</h5>
              <p className="customer__testimonial">
                  "A customer testimonial that <br />
                  highlights features and <br />
                  answers potential customer <br />
                  doubts about your product or <br />
                  service. Showcase <br />
                  testimonials from a similar <br />
                  demographic to your <br />
                  customers."
              </p>
            </div>
            <div className="embla__slide">
              <div className="customer__img3"></div>
              <h4 className="customer__name">Customer name</h4>
              <h5 className="customer__company">Position, Company name</h5>
              <p className="customer__testimonial">
                  "A customer testimonial that <br />
                  highlights features and <br />
                  answers potential customer <br />
                  doubts about your product or <br />
                  service. Showcase <br />
                  testimonials from a similar <br />
                  demographic to your <br />
                  customers."
              </p>
            </div>
          
        </div>
    </section>
  )
}

export default Testimonial
