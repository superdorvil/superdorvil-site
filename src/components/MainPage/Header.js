import { useSelector } from 'react-redux';
import {
  HeaderContainer,
  Title,
  ProjectContainer,
} from './Elements';
import ProjectButton from './ProjectButton';
import {STATES} from '../../constants';

function Header({title}) {
  const appMode = useSelector((states) => states.mode.appMode);

  if (appMode === STATES.appMode.home) {
      return <></>;
  }

  return (
    <HeaderContainer>
      <Title>{title}</Title>
      {appMode === STATES.appMode.portfolio ?
        <ProjectContainer>
          <ProjectButton project={STATES.projectMode.lavaNFT} />
          <ProjectButton project={STATES.projectMode.timeIsLife} />
          {/*<ProjectButton project={STATES.projectMode.lavaDAO} />
          <ProjectButton project={STATES.projectMode.ethDAO} />*/}
        </ProjectContainer> :
        <></>
      }
    </HeaderContainer>
  );
}

export default Header;
