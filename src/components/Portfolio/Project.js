import Image from 'next/image';
import {ButtonContainer, ProjectContainer, Divider, Title} from './Elements';
import Button from '../Button';
import ProjectImage from './ProjectImage';
import About from './About';
import {ICONS} from '../../constants';

function Project({about, skills, title, image, dividerInvisible}) {
  return (
    <ProjectContainer>
      <Title>{title}</Title>
      <ProjectContainer>
        <ProjectImage image={image} />
        <About description={about} />
        <About description={skills} />
      </ProjectContainer>
      <ButtonContainer>
        <Button description="Github" icon={ICONS.GITHUB} />
      </ButtonContainer>
      <Divider dividerInvisible={dividerInvisible} />
    </ProjectContainer>
  );
}

export default Project;
