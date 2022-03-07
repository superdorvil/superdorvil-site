import {Container, TopLeftText} from './Elements';
import Image from 'next/image'
import ethBG from '../../images/EthBG.png';

function EthBackground({children}) {
  return (
    <Container>
      <Image
        alt="Mountains"
        src={ethBG}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      {children}
    </Container>
  );
}

export default EthBackground;
