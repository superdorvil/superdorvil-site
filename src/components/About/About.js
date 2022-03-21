import Image from 'next/image';
import {Container, InnerContainer, PhotoContainer, Message, Footer} from './Elements';
import Header from '../Header';
import superDorvilCollage from '../../images/SuperDorvilCollage.jpg';
import {STATES} from '../../constants';

function About() {
  return (
    <Container id={STATES.appMode.about}>
      <Header title="Me, Myself and I" />
      <InnerContainer>
        <PhotoContainer>
          <Image
            alt="Super Dorvil Collage"
            src={superDorvilCollage}
            quality={100}
            layout="responsive"
            objectFit="cover"
          />
        </PhotoContainer>
        <Message>
        Hi, my name is Dorvil Gabriel a full stack blockchain developer. Prior to this endeavor I spent about 5 years developing software for nuclear submarines. I always spend my free time learning random new things that piqued my interest. One day, like many of us in the Web3 industry, I was captured and fell down the perpetual crypto/blockchain rabbit hole. After countless books and YouTube videos, I realized I needed to make a full 180 in my career. Realizing this technology can truly change the world for the better and naturally I created an NFT to start my journey off as a blockchain developer.
        </Message>
      </InnerContainer>
      <Footer>Designed and Built by SuperDorvil 😊</Footer>
    </Container>
  )
}

export default About;
