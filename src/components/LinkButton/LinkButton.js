import {Container, Description} from './Elements';
import SocialIcon from '../SocialMediaIcons/SocialIcon';

function LinkButton({description, icon, href}) {
  return (
    <Container href={href}>
      <Description>{description}</Description>
      <SocialIcon icon={icon} small={true} />
    </Container>
  );
}

export default LinkButton;
