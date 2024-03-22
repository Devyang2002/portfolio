import React from 'react'
import demo2 from '../assets/demo2.webp'
import CardProjects from './CardProjects'
import '../styles/Projects.css'

export default function Projects({id, data}) {
  return (
    <div className='project_main' id={id}>
        <div className="project_heading">
            <h1>Projects</h1>
            <p>Browse through my portfolio showcasing various projects, each designed to solve different problems and demonstrate my skills and creativity.</p>
        </div>
        <div className="project_cards">
          {data.map((item)=>{
            return <CardProjects project_img={item.image.url} project_heading={item.title} project_para={item.techStack} />
          })
          }
        
        </div>
        <div className="Arrow_right">
            Scroll ➡ side to see all the Projects
        </div>
    </div>
  )
}
