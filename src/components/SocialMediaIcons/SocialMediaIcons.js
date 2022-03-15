import {Container, ButtonContainer} from './Elements';
import SocialIcon from './SocialIcon';
import {ICONS} from '../../constants';

function SocialMediaIcons() {
  return (
    <Container>
      <ButtonContainer>
        <SocialIcon icon={ICONS.GITHUB} href="https://github.com/superdorvil" />
      </ButtonContainer>
      <ButtonContainer>
        <SocialIcon icon={ICONS.TWITTER} href="https://twitter.com/superdorvil" />
      </ButtonContainer>
      <ButtonContainer>
        <SocialIcon icon={ICONS.LINKEDIN} href="https://www.linkedin.com/in/dorvil-gabriel-03109178" />
      </ButtonContainer>
    </Container>
  )
}

export default SocialMediaIcons;
