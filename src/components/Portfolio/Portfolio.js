import Image from 'next/image';
import {
  Container,
  ButtonContainer,
  InfoContainer,
  InnerContainer,
  ProjectImage,
  Info,
} from './Elements';
import Button from '../Button';
import {
  lavaNftInfo,
  lavaDaoInfo,
  timeIsLifeInfo,
  ethDaoInfo
} from './Data';
import { useSelector } from 'react-redux';

function Portfolio() {
  const data = [];
  const buttons = [];
  let portfolioData;
  const projectMode = useSelector((state) => state.mode.projectMode);

  /*Data.lavaDAO.forEach((d, i) => {
    data.push(<Info>{d}</Info>)
  });*/

  if (true) {

  }

  return (
    <Container>
    </Container>
  )
}

export default Portfolio;
