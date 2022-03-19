import Image from 'next/image';
import {CarouselButton} from './Elements';
import leftButton from '../../images/LeftButton.svg';
import rightButton from '../../images/RightButton.svg';
import {STATES} from '../../constants';

function EthButton({right}) {
  const image = right ? rightButton : leftButton;

  return (
    <CarouselButton>
      <Image
        alt="Carousel Button"
        src={image}
        priority
        quality={100}
        layout="intrinsic"
        objectFit="cover"
      />
    </CarouselButton>
  );
}

export default EthButton;
