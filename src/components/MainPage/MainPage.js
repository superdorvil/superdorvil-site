import About from '../About';
import Contact from '../ContactMe';
import Freedom from '../Freedom'; // Future section, ignore for now
import Home from '../Home';
import Portfolio from '../Portfolio';
import Header from './Header';
import {
  Container,
} from './Elements';
import {STATES} from '../../constants';

function MainPage({appMode, projectMode, projectPressed, children}) {
  const portfolio = 'portfolio';
  let title = '';

  switch (appMode) {
    case STATES.appMode.home:
      title = '';
      break;
    case STATES.appMode.portfolio:
      title = portfolio;
      break;
    case STATES.appMode.skills:
      title = 'Skills & Experience';
      break;
    case STATES.appMode.contact:
      title = 'Contact Me';
      break;
    case STATES.appMode.freedom:
      title = 'Freedom';
      break;
    case STATES.appMode.about:
      title = 'About Me, Myself & I';
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
      {children}
    </Container>
  );
}

export default MainPage;
