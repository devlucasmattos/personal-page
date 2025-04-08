import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import ResultsCarousel from './components/ResultsCarousel/ResultsCarousel';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/base.css';
import './styles/variables.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <ResultsCarousel />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;