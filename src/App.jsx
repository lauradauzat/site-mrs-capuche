import Header from './components/Header';
import HeroArea from './components/HeroArea';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

import Contact from './components/Contact';
import Footer from './components/Footer';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faShoppingCart,faPuzzlePiece, faWrench, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Hook from './components/Hook';

library.add(fas, faWordpressSimple, faDesktop, faShoppingCart, faPuzzlePiece, faWrench, faGraduationCap)

function App() {
  return (
    <div className="App">
  
      <Header />
      <HeroArea />
       <Hook />
      <Skills />
      <Services />
      <Portfolio />
      <About />
      <Experience />
      <Education />
   
   
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
