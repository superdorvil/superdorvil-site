import About from '../About';
import Contact from '../ContactMe';
import Freedom from '../Freedom'; // Future section, ignore for now
import Home from '../Home';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import Header from './Header';
import {
  Container,
} from './Elements';
import {STATES} from '../../constants';

function MainPage({appMode, projectMode, projectPressed}) {
  const portfolio = 'portfolio';
  let title = '';
  let screen;

  switch (appMode) {
    case STATES.appMode.home:
      title = '';
      screen = <Home />;
      break;
    case STATES.appMode.portfolio:
      title = portfolio;
      screen = <Portfolio projectMode={projectMode} />;
      break;
    case STATES.appMode.skills:
      title = 'Skills & Experience';
      screen = <Skills />;
      break;
    case STATES.appMode.contact:
      title = 'Contact Me';
      screen = <Contact />;
      break;
    case STATES.appMode.freedom:
      title = 'Freedom';
      screen = <Freedom />;
      break;
    case STATES.appMode.about:
      title = 'About Me, Myself & I';
      screen = <About />;
      break;
    default:
      title = '';
  }

  return (
    <Container borderVisible={title !== ''}>
      <Header
        projectButtonsVisible={title === portfolio}
        title={title === portfolio ? projectMode : title}
        projectMode={projectMode}
        projectPressed={projectPressed}
      />
      {screen}
    </Container>
  );
}

export default MainPage;
