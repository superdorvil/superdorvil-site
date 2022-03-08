import {Container, Job, Name} from './Elements';
import ProfilePicture from './ProfilePicture';
import SideBarButtons from './SideBarButtons';
import SocialMediaIcons from '../SocialMediaIcons';

function SideBar({appMode, sideButtonPressed}) {
  return (
    <Container>
      <ProfilePicture />
      <Name>Dorvil Gabriel</Name>
      <Job>Full Stack Blockchain Developer</Job>
      <SideBarButtons appMode={appMode} buttonPressed={sideButtonPressed} />
      <SocialMediaIcons />
    </Container>
  )
}

export default SideBar;
