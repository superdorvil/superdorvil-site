import {useSelector} from 'react-redux';
import Image from 'next/image';
import {ImageContainer} from './Elements';

function ProjectImage({image}) {
  const projectMode = useSelector((state) => state.mode.projectMode);

  return (
    <ImageContainer>
      <Image
        alt={projectMode}
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
