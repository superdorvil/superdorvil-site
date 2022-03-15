import Image from 'next/image';
import {
  Container,
  CollageContainer,
  InnerContainer,
  Message,
  Footer,
} from './Elements';
import SuperDorvilCollage from '../../images/SuperDorvilCollage.png';
import Button from '../Button';
import Header from '../Header';
import {STATES} from '../../constants';

function About() {
  return (
    <Container id={STATES.appMode.about}>
      <Header title="Me, Myself and I" />
      <InnerContainer>
        <CollageContainer>
          <Image
            alt="Super Dorvil Collage"
            src={SuperDorvilCollage}
            priority
            quality={100}
            layout="responsive"
            objectFit="cover"
          />
        </CollageContainer>
        <Message>
        Hi, my name is Dorvil Gabriel, aka SuperDorvil, soon to be the best Fullstack Blockchain Developer around 🙃. After 5 years developing software for nuclear submarines, I never expected I would quit my job to become a full stack blockchain developer. But like many of us in this industry, I was captured and fell down the perpetual crypto/blockchain rabbit hole. Naturally I read countless books, watched countless YouTube videos, lost🥲 and made😏 lots of money in cryptocurrencies I realized I needed to make a full 180 in my career. My curiosities evolved from hey I can make money to this is cool tech to WAIT!!!!! This technology can truly change the world and increase the amount of freedom and overall happiness for everyone on the planet. I had no choice but to quit my job, teach myself React and Solidity and create an NFT to start my journey off as a blockchain developer. And now my goal is to travel the world, learn the secrets of the universe and liberate the world, one DAPP at a time!!!! Hit me up, I will make you a DAPP or just to chat, I am super friendly, wishing you the best.
        SuperDorvil
        </Message>
        <Button description="Click Me" />
        <Footer>Designed and Built by Dorvil Gabriel aka SuperDorvil 😊</Footer>
      </InnerContainer>
    </Container>
  )
}

export default About;
