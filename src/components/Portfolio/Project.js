import Image from 'next/image';
import {ButtonContainer, ProjectContainer, Divider, Title} from './Elements';
import ProjectImage from './ProjectImage';
import About from './About';
import EthButton from '../EthButton';
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
      <ButtonContainer href={github}>
        <EthButton width={7}/>
      </ButtonContainer>
      <Divider dividerInvisible={dividerInvisible} />
    </ProjectContainer>
  );
}

export default Project;
