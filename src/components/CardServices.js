import React from 'react';
import '../styles/CardServices.css'

export default function CardServices(props) {
  return (
    <div className='card_main'>
        <div className="card">
            <div className="card_img">
                <img src={props.Img} alt="" />
            </div>
            <div className="content">
                <h2>{props.Heading}</h2>
                <p>{props.Paragraph}</p>
                <p>Charges:{props.Charges}</p>
                <button className='card_button'>Hire Me</button>
            </div>
        </div>
    </div>
  )
}
