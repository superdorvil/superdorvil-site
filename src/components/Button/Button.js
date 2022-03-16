import {Container, Description} from './Elements';
import SocialIcon from '../SocialMediaIcons/SocialIcon';

function Button({description, buttonPressed}) {
  return (
    <Container
      onClick={(e) => {
        e.preventDefault();
        buttonPressed();
      }}>
      <Description>{description}</Description>
    </Container>
  );
}

export default Button;
