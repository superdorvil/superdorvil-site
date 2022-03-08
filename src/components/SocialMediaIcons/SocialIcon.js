import Icon from '../Icon';
import {COLORS} from '../../constants';
import {Button} from './Elements';

function SocialIcon({icon}) {
  return(
    <Button>
      <Icon icon={icon} />
    </Button>
  )
}

export default SocialIcon;
