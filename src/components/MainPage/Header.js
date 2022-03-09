import {
  HeaderContainer,
  Title,
  ProjectContainer,
} from './Elements';
import ProjectButton from './ProjectButton';
import {STATES} from '../../constants';

function Header({
  title,
  visible,
  projectMode,
  projectPressed,
  projectButtonsVisible,
  borderVisible
}) {
  if (!visible) {
      return<></>
  }

  return (
    <HeaderContainer borderVisible={borderVisible}>
      <Title>{title}</Title>
      {projectButtonsVisible ?
        <ProjectContainer>
          <ProjectButton
            project={STATES.projectMode.lavaNFT}
            projectMode={projectMode}
            projectPressed={projectPressed}
          />
          <ProjectButton
            project={STATES.projectMode.timeIsLife}
            projectMode={projectMode}
            projectPressed={projectPressed}
          />
          <ProjectButton
            project={STATES.projectMode.lavaDAO}
            projectMode={projectMode}
            projectPressed={projectPressed}
          />
          <ProjectButton
            project={STATES.projectMode.ethDAO}
            projectMode={projectMode}
            projectPressed={projectPressed}
          />
        </ProjectContainer> :
        <></>
      }
    </HeaderContainer>
  );
}

export default Header;
