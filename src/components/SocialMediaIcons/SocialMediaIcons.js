import {Container} from './Elements';
import SocialIcon from './SocialIcon';
import {ICONS} from '../../constants';

function SocialMediaIcons() {
  return (
    <Container>
      <SocialIcon icon={ICONS.GITHUB} />
      <SocialIcon icon={ICONS.TWITTER} />
      <SocialIcon icon={ICONS.LINKEDIN} />
    </Container>
  )
}

export default SocialMediaIcons;
