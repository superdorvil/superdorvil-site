import {
  Container,
  InnerContainer,
  Title,
  SubTitleContainer,
  SubTitle
} from './Elements';
import Button from '../Button';

function Home() {
  return (
    <Container>
      <InnerContainer>
      <Title>I Create Killer</Title>
      <Title>Blockchain DAPPS</Title>
      <SubTitleContainer>
        <SubTitle>I am a Fullstack Solidity Blockchain Engineer</SubTitle>
        <SubTitle>Liberating the world one DAPP</SubTitle>
        <SubTitle>at a time</SubTitle>
      </SubTitleContainer>
      <Button description="Hire Me" />
      </InnerContainer>
    </Container>
  )
}

export default Home;
