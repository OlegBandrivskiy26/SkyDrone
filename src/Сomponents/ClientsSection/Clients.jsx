import React from 'react'
// importing styles
import "./Clients.css"

const Clients = () => {
  return (
    <section className='clients' id="clients">
        <div className="clients__container">
            <h1 className="clients__title">Used by the world's most innovative <br /> companies</h1>
            <div className="clients__logo__grp">
                <div className="clients__logo remix"></div>
                <div className="clients__logo stencil"></div>
                <div className="clients__logo particle"></div>
                <div className="clients__logo shippable"></div>
                <div className="clients__logo atom"></div>
                <div className="clients__logo terraform"></div>
                <div className="clients__logo rackspace"></div>
            </div>
        </div>
    </section>
  )
}

export default Clients
