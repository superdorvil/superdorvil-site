import {
  Container,
  Title,
  SubTitleContainer,
  SubTitle
} from './Elements';
import Button from '../Button';

function Home() {
  return (
    <Container>
      <Title>I Create Killer</Title>
      <Title>Blockchain DAPPS</Title>
      <SubTitleContainer>
        <SubTitle>I'm a Fullstack Solidity Blockchain Engineer</SubTitle>
        <SubTitle>Liberating the world one DAPP</SubTitle>
        <SubTitle>at a time</SubTitle>
      </SubTitleContainer>
      <Button description="Hire Me" />
    </Container>
  )
}

export default Home;
