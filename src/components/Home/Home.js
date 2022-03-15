import {
  Container,
  ButtonContainer,
  SubTitleContainer,
  Title,
  SubTitle
} from './Elements';
import Button from '../Button';
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
      <ButtonContainer
        to={STATES.appMode.contact}
        spy={true}
        smooth={true}
        duration={500}>
        <Button description="Contact Me" />
      </ButtonContainer>
    </Container>
  )
}

export default Home;
