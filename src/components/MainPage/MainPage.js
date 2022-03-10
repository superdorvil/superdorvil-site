import { useSelector, useDispatch } from 'react-redux';
import About from '../About';
import Contact from '../ContactMe';
import Freedom from '../Freedom'; // Future section, ignore for now
import Home from '../Home';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import Header from './Header';
import {
  Container,
  Divider
} from './Elements';
import {STATES} from '../../constants';

function MainPage({projectPressed}) {
  const mode = useSelector((state) => state.mode);
  let screen;
  let title;

  switch (mode.appMode) {
    case STATES.appMode.home:
      title = '';
      screen = <Home />;
      break;
    case STATES.appMode.portfolio:
      title = mode.projectMode;
      screen = <Portfolio />;
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
    <Container>
      <Header title={title} />
      <Divider borderVisible={mode.appMode !== STATES.appMode.home} />
      {screen}
    </Container>
  );
}

export default MainPage;
