import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import { BrowserRouter} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';

function App() { 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae").then((result)=>{
        result.json().then((response)=>{
        
        setData(response.user);

        console.log("response",response.user);
      })
    })
  }, []);

  useEffect(() => {
    console.log("Data updated:", data);
    if (data != null) {
      setLoading(false);
    }
  }, [data]);

  return (
    <BrowserRouter>
    <div className="Container">
        <div className="body">
          {loading ? 
          <div className="loader">
            <CircularProgress sx={{ color: '#be84bf' }} thickness={5} />
          </div> : 
            <>
            <section className='hero'id='home'> 
            <Navbar/>
            <Hero data={data.about}/>
            </section>
            <section className='services' id='service'>
              <Services data={data.services}/>
            </section>
            <section className='projects' id='project'>
              <Projects data={data.projects}/>
            </section>
            <section className='skills' id='skill'>
              <Skills data={data.skills}/>
            </section>
            <section className='testimonials'id='testimonial' >
                <Testimonials data={data.testimonials}/>
            </section>
          </>
          }
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
