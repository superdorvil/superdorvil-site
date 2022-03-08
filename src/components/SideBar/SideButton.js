import {
  Button,
  ButtonText
} from './Elements';

function SideButton({buttonPressed, description, currentMode}) {
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        buttonPressed(description);
      }}>
      <ButtonText selected={currentMode === description}>
        {description}
      </ButtonText>
    </Button>
  );
}

export default SideButton;
