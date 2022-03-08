import {Container, Description} from './Elements';

function Button({description}) {
  return (
    <Container>
      <Description>{description}</Description>
    </Container>
  );
}

export default Button;
