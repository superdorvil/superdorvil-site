import Image from 'next/image';
import {
  Container,
  ButtonContainer,
  ProjectContainer,
  InnerContainer,
  Skills,
} from './Elements';
import Button from '../Button';
import ProjectImage from './ProjectImage';
import About from './About';
import Data from './Data';
import { useSelector } from 'react-redux';
import SocialIcon from '../SocialMediaIcons/SocialIcon';
import {ICONS} from '../../constants';

function Portfolio() {
  const data = [];
  const buttons = [];
  let portfolioData;
  const projectModeIndex = useSelector((state) => state.mode.projectModeIndex);

  return (
    <Container>
      <InnerContainer>
        <ProjectContainer>
          <ProjectImage />
          <About description={Data[projectModeIndex].about} />
          <About description={Data[projectModeIndex].skills} />
        </ProjectContainer>
        <ButtonContainer>
          <Button description="Github" extra={<SocialIcon icon={ICONS.GITHUB} />} />
        </ButtonContainer>
      </InnerContainer>
    </Container>
  )
}

export default Portfolio;
