import {Container, Description} from './Elements';
import SocialIcon from '../SocialMediaIcons/SocialIcon';

function Button({description, icon}) {
  return (
    <Container>
      <Description icon={icon}>{description}</Description>
      <SocialIcon icon={icon} small={true} />
    </Container>
  );
}

export default Button;
