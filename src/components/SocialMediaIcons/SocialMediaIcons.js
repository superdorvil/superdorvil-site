import {Container, ButtonContainer} from './Elements';
import {STATES} from '../../constants';
import EthButton from '../EthButton';

function SocialMediaIcons() {
  return (
    <Container>
      <ButtonContainer href="https://github.com/superdorvil">
        <EthButton icon={STATES.icons.github} width={6} />
      </ButtonContainer>
      <ButtonContainer href="https://twitter.com/superdorvil">
        <EthButton icon={STATES.icons.twitter} width={6} />
      </ButtonContainer>
      <ButtonContainer href="https://www.linkedin.com/in/dorvil-gabriel">
        <EthButton icon={STATES.icons.linkedIn} width={6} />
      </ButtonContainer>
    </Container>
  )
}

export default SocialMediaIcons;
