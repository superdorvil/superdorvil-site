import Image from 'next/image';
import {Container, CollageContainer, Message} from './Elements';
import SuperDorvilCollage from '../../images/SuperDorvilCollage.jpg';

function About() {
  return (
    <Container>
      <CollageContainer>
        <Image
          alt="Super Dorvil Collage"
          src={SuperDorvilCollage}
          width={400}
          height={400}
          priority
          quality={100}
          layout="fixed"
          objectFit="cover"
        />
      </CollageContainer>
      <Message>
      Hi, my name is Dorvil Gabriel, aka SuperDorvil, soon to be the best Fullstack Blockchain Developer around 🙃. After 5 years developing software for nuclear submarines, I never expected I would quit my job to become a full stack blockchain developer. But like many of us in this industry, I was captured and fell down the perpetual crypto/blockchain rabbit hole. Naturally I read countless books, watched countless YouTube videos, lost🥲 and made😏 lots of money in cryptocurrencies I realized I needed to make a full 180 in my career. My curiosities evolved from hey I can make money to this is cool tech to WAIT!!!!! This technology can truly change the world and increase the amount of freedom and overall happiness for everyone on the planet. I had no choice but to quit my job, teach myself React and Solidity and create an NFT to start my journey off as a blockchain developer. And now my goal is to travel the world, learn the secrets of the universe and liberate the world, on DAPP at a time!!!! Hit me up, I will make you a DAPP or just to chat, I am super friendly, wishing you the best.

      SuperDorvil
      </Message>
    </Container>
  )
}

export default About;
