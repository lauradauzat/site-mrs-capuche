import Header from './components/Header';
import HeroArea from './components/HeroArea';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Services from './components/Services';
import Tarifs from './components/Tarifs'; // 11/09/2026 — LD : section tarifs (création + deux suivis)
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hook from './components/Hook';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faShoppingCart, faPuzzlePiece, faWrench } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faWordpressSimple, faDesktop, faShoppingCart, faPuzzlePiece, faWrench)

function App() {
  return (
    <div className="App">
      <Header />
      <HeroArea />
      <Hook />
      <Services />
      <Tarifs />
      <Portfolio />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
