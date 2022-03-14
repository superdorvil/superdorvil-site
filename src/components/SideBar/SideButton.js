import {Button, ButtonText} from './Elements';
import {useSelector, useDispatch} from 'react-redux';
import {setAppMode} from '../../redux/mode/modeActions';

function SideButton({description}) {
  const dispatch = useDispatch();
  const appMode = useSelector((state) => state.mode.appMode);

  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        dispatch(setAppMode(description))
      }}>
      <ButtonText selected={appMode === description}>
        {description}
      </ButtonText>
    </Button>
  );
}

export default SideButton;
