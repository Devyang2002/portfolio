import React from 'react'
import '../styles/CardProjects.css'

export default function CardProjects(props) {
  return (
    <div className="card_project">
        <div className="face front">
            <img src={props.project_img} alt="" />
            <h3>{props.project_heading}</h3>
        </div>
        <div className="face back">
            <h3>{props.project_heading}</h3>
            <p>{props.project_para}</p>
            <div className="link">
                <a href="#">Details</a>
            </div>
        </div>
    </div>
  )
}
