import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import { BrowserRouter} from 'react-router-dom';

function App() {  
  return (
    <BrowserRouter>
    <div className="Container">
        <div className="body">
          <section className='hero'id='home'> 
          <Navbar/>
          <Hero />
          </section>
          <section className='services' id='service'>
            <Services />
          </section>
          <section className='projects' id='project'>
            <Projects />
          </section>
          <section className='skills' id='skill'>
            <Skills  />
          </section>
          <section className='testimonials'id='testimonial' >
              <Testimonials />
          </section>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
