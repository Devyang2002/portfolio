import React from 'react'
import demo2 from '../assets/demo2.webp'
import CardProjects from './CardProjects'
import '../styles/Projects.css'

export default function Projects({id}) {
  return (
    <div className='project_main' id={id}>
        <div className="project_heading">
            <h1>Projects</h1>
            <p>Browse through my portfolio showcasing various projects, each designed to solve different problems and demonstrate my skills and creativity.</p>
        </div>
        <div className="project_cards">
            <CardProjects project_img={demo2} project_heading="Something" project_para="jbfjbff fjfbfbj bffj bfj  jfjfjefjffef ef ef jew fbjefbje fjebjf jefejfb jebfj e fje fejfbjebfj fb fiefb jefb  jefbjefje fjf jefje jf bejf ejfbejfbejfboibfebwfifbuf  ewjk" />
            <CardProjects project_img={demo2} project_heading="Something" project_para="jbfjbff fjfbfbj bffj bfj  jfjfjefjffef ef ef jew fbjefbje fjebjf jefejfb jebfj e fje fejfbjebfj fb fiefb jefb  jefbjefje fjf jefje jf bejf ejfbejfbejfboibfebwfifbuf  ewjk" />
            <CardProjects project_img={demo2} project_heading="Something" project_para="jbfjbff fjfbfbj bffj bfj  jfjfjefjffef ef ef jew fbjefbje fjebjf jefejfb jebfj e fje fejfbjebfj fb fiefb jefb  jefbjefje fjf jefje jf bejf ejfbejfbejfboibfebwfifbuf  ewjk" />
            <CardProjects project_img={demo2} project_heading="Something" project_para="jbfjbff fjfbfbj bffj bfj  jfjfjefjffef ef ef jew fbjefbje fjebjf jefejfb jebfj e fje fejfbjebfj fb fiefb jefb  jefbjefje fjf jefje jf bejf ejfbejfbejfboibfebwfifbuf  ewjk" />
            <CardProjects project_img={demo2} project_heading="Something" project_para="jbfjbff fjfbfbj bffj bfj  jfjfjefjffef ef ef jew fbjefbje fjebjf jefejfb jebfj e fje fejfbjebfj fb fiefb jefb  jefbjefje fjf jefje jf bejf ejfbejfbejfboibfebwfifbuf  ewjk" />
        </div>
        {/* <div className="Arrow_right">
            Scroll ➡ side to see all the Projects
        </div> */}
    </div>
  )
}
