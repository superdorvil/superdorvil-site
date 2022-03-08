import {
  Button,
  ButtonText
} from './Elements';

function SideButton({buttonPressed, description, appMode}) {
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        buttonPressed(description);
      }}>
      <ButtonText selected={appMode === description}>
        {description}
      </ButtonText>
    </Button>
  );
}

export default SideButton;
