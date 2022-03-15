import Image from 'next/image';
import {ImageContainer} from './Elements';

function ProjectImage({image, title}) {
  return (
    <ImageContainer>
      <Image
        alt={title}
        src={image}
        priority
        quality={100}
        layout="responsive"
        objectFit="cover"
      />
    </ImageContainer>
  );
}

export default ProjectImage;
