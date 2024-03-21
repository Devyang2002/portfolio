import React from 'react'
import CardServices from './CardServices'
import '../styles/Services.css'
import Demo from '../assets/demo.jpeg'

export default function Services({id}) {
  return (
    <div className="services_main"id={id}>
        <div className="services_head">
            <h1>Services</h1>
            <h2>Offered By</h2>
            <h1>Me</h1>
        </div>
        <div className="services_cards">
            <CardServices Img={Demo} Heading="Something" Paragraph="lorem2 jd vjadbv v vhj av  v v v v v h vh vh vbfdbfbdfbfb d  ff ffbaf  av a" Charges="300$"/>
            <CardServices Img={Demo} Heading="Something" Paragraph="lorem2 jd vjadbv v vhj av  v v v v v h vh vh vbfdbfbdfbfb d  ff ffbaf  av a" Charges="300$"/>
            <CardServices Img={Demo} Heading="Something" Paragraph="lorem2 jd vjadbv v vhj av  v v v v v h vh vh vbfdbfbdfbfb d  ff ffbaf  av a" Charges="300$"/>
            <CardServices Img={Demo} Heading="Something" Paragraph="lorem2 jd vjadbv v vhj av  v v v v v h vh vh vbfdbfbdfbfb d  ff ffbaf  av a" Charges="300$"/>
            <CardServices Img={Demo} Heading="Something" Paragraph="lorem2 jd vjadbv v vhj av  v v v v v h vh vh vbfdbfbdfbfb d  ff ffbaf  av a" Charges="300$"/>
        </div>
        {/* <div className="Arrow">
            Scroll ➡ side to see all the Services
        </div> */}
    </div>
  )
}
