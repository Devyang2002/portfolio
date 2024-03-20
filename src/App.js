import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardServices from './components/CardServices';
import Services from './components/Services';
import CardProjects from './components/CardProjects';
import Projects from './components/Projects';

function App() {
  return (
    <div className="Container">
        <div className="body">
          <section className='hero'> 
          <Navbar/>
          <Hero/>
          </section>
          <section className='services'>
            <Services/>
          </section>
          <section className='projects'>
            <Projects/>
          </section>
          <section className='skills'>Skills</section>
          <section className='testimonials'>Testimonials</section>
          <section className='social'>Social</section>
        </div>
    </div>
  );
}

export default App;
