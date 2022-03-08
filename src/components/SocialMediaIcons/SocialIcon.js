import Icon from '../Icon';
import {COLORS} from '../../constants';
import {Button} from './Elements';

function SocialIcon({icon}) {
  return(
    <Button>
      <Icon icon={icon} width={3.5} height={3.5} />
    </Button>
  )
}

export default SocialIcon;
