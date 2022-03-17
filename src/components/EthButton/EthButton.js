import Image from 'next/image';
import {Container} from './Elements';
import github from '../../images/EthGithub.svg';
import twitter from '../../images/EthTwitter.svg';
import linkedIn from '../../images/EthLinkedIn.svg';
import {STATES} from '../../constants';

function EthButton({width, icon, sidebar}) {
  let image;

  switch (icon) {
    case STATES.icons.linkedIn:
      image = linkedIn;
      break;
    case STATES.icons.twitter:
      image = twitter;
      break;
    default:
      image = github;
  }

  return (
    <Container width={width} sidebar>
      <Image
        alt="Eth Button"
        src={image}
        priority
        quality={100}
        layout="intrinsic"
        objectFit="cover"
      />
    </Container>
  )
}

export default EthButton;
