import {Container} from './Elements';
import ProfilePicture from './ProfilePicture';
import SideBarButtons from './SideBarButtons';
import SocialMediaIcons from '../SocialMediaIcons';

function SideBar() {
  return (
    <Container>
      <ProfilePicture />
      <SideBarButtons />
      <SocialMediaIcons />
    </Container>
  )
}

export default SideBar;
