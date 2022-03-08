import {Container} from './Elements';
import ProfilePicture from './ProfilePicture';
import SideBarButtons from './SideBarButtons';
import SocialMediaIcons from '../SocialMediaIcons';

function SideBar({appMode, sideButtonPressed}) {
  return (
    <Container>
      <ProfilePicture />
      <SideBarButtons appMode={appMode} buttonPressed={sideButtonPressed} />
      <SocialMediaIcons />
    </Container>
  )
}

export default SideBar;
