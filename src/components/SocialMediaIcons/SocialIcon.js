import {Button} from './Elements';
import Icon from '../Icon';

function SocialIcon({icon, small, href}) {

  if (icon) {
    return(
      <Button href={href}>
        <Icon icon={icon} small={small} />
      </Button>
    )
  }

  return <></>;
}

export default SocialIcon;
