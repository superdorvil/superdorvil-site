import Image from 'next/image';
import {Container} from './Elements';
import Project from './Project';
import Data from './Data';
import Header from '../Header';
import {STATES} from '../../constants';

function Portfolio() {
  return (
    <Container id={STATES.appMode.portfolio}>
      <Header title="Portfolio" />
      <Project {...Data[0]} />
      <Project {...Data[1]} />
      <Project {...Data[2]} dividerInvisible={true} />
    </Container>
  )
}

export default Portfolio;
