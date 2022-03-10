import {Container, ButtonContainer} from './Elements';
import SocialIcon from './SocialIcon';
import {ICONS} from '../../constants';

function SocialMediaIcons() {
  return (
    <Container>
      <ButtonContainer>
        <SocialIcon icon={ICONS.GITHUB} />
      </ButtonContainer>
      <ButtonContainer>
        <SocialIcon icon={ICONS.TWITTER} />
      </ButtonContainer>
      <ButtonContainer>
        <SocialIcon icon={ICONS.LINKEDIN} />
      </ButtonContainer>
    </Container>
  )
}

export default SocialMediaIcons;
