import {useSelector} from 'react-redux';
import Image from 'next/image';
import {ImageContainer} from './Elements';
import lavaLampNFTs from '../../images/LavaLampNFTs.png';
import timeIsLife from '../../images/TimeIsLife.png';
import superDorvilSite from '../../images/SuperDorvilSite.jpg';
import {STATES} from '../../constants';

function ProjectImage() {
  const projectMode = useSelector((state) => state.mode.projectMode);
  let src;
  let alt;

  switch (projectMode) {
    case STATES.projectMode.lavaNFT:
      src = lavaLampNFTs;
      break;
    case STATES.projectMode.timeIsLife:
      src = timeIsLife;
      break;
    case STATES.projectMode.superdorvil:
      src = superDorvilSite;
      break;
    case STATES.projectMode.lavaDAO:
      src = timeIsLife;
      break;
    case STATES.projectMode.ethDAO:
      src = timeIsLife;
      break;
    default:
    src = timeIsLife;
  }

  return (
    <ImageContainer>
      <Image
        alt={projectMode}
        src={src}
        priority
        quality={100}
        layout="responsive"
        objectFit="cover"
      />
    </ImageContainer>
  );
}

export default ProjectImage;
