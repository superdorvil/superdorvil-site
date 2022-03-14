import {Container} from './Elements';
import About from '../About';
import Contact from '../ContactMe';
import Home from '../Home';
import Skills from '../Skills';
import Portfolio from '../Portfolio';

function MainPage({projectPressed}) {
  return (
    <Container>
      <Home />
      <Portfolio />
      <Skills />
      <Contact />
      <About />
    </Container>
  );
}

export default MainPage;
