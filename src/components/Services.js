import React from 'react'
import CardServices from './CardServices'
import '../styles/Services.css'
import Demo from '../assets/demo.jpeg'

export default function Services({id, data}) {
  return (
    <div className="services_main"id={id}>
        <div className="services_head">
            <h1>Services</h1>
            {/* <h2>Offered By</h2>
            <h1>Me</h1> */}
        </div>
        <div className="services_cards">
          {
            data.map((item)=>{
              return <CardServices Img={item.image.url} Heading={item.name} Paragraph={item.desc} Charges={item.charge}/>
            })
          }
        </div>
        <div className="Arrow">
            Scroll ➡ side to see all the Services
        </div>
    </div>
  )
}
