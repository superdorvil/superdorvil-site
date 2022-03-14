import {Button} from './Elements';
import Icon from '../Icon';

function SocialIcon({icon, small}) {

  if (icon) {
    return(
      <Button>
        <Icon icon={icon} small={small} />
      </Button>
    )
  }

  return <></>;
}

export default SocialIcon;
