import {Container, Eth, TopLeftText} from './Elements';
import Image from 'next/image'
import ethBG from '../../images/EthBG.svg';

function EthBackground({children}) {
  return (
    <Container>
      <Eth>
        <Image
          alt="Ethereum Background???"
          src={ethBG}
          layout="intrinsic"
          objectFit="fill"
          objectPosition="fill"
          quality={100}
        />
      </Eth>
      {children}
    </Container>
  );
}

export default EthBackground;
