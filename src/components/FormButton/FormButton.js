import {Container} from './Elements';

function FormButton({value, buttonPressed}) {
  return (
    <Container type="submit" value={value} />
  );
}

export default FormButton;
