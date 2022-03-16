import {
  Container,
  SubTitleContainer,
  ButtonContainer,
  Title,
  SubTitle
} from './Elements';
import ScrollButton from '../ScrollButton';
import {STATES} from '../../constants';

function Home() {
  return (
    <Container id={STATES.appMode.home}>
      <Title>I Create Killer</Title>
      <Title>Blockchain DAPPS</Title>
      <SubTitleContainer>
        <SubTitle>I am a Fullstack Solidity Blockchain Engineer</SubTitle>
        <SubTitle>Liberating the world one DAPP</SubTitle>
        <SubTitle>at a time</SubTitle>
      </SubTitleContainer>
      <ButtonContainer>
        <ScrollButton
          to={STATES.appMode.contact}
          spy={true}
          smooth={true}
          duration={500}
          description="Contact Me"
          />
      </ButtonContainer>
    </Container>
  )
}

export default Home;
