import Image from 'next/image';
import {ButtonContainer, ProjectContainer, Divider, Title} from './Elements';
import LinkButton from '../LinkButton';
import ProjectImage from './ProjectImage';
import About from './About';
import {ICONS} from '../../constants';

function Project({about, skills, title, image, github, dividerInvisible}) {
  return (
    <ProjectContainer>
      <Title>{title}</Title>
      <ProjectContainer>
        <ProjectImage image={image} title={title} />
        <About description={about} />
        <About description={skills} />
      </ProjectContainer>
      <ButtonContainer>
        <LinkButton description="Github" icon={ICONS.GITHUB} href={github} />
      </ButtonContainer>
      <Divider dividerInvisible={dividerInvisible} />
    </ProjectContainer>
  );
}

export default Project;
