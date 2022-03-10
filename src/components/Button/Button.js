import {Container, Description} from './Elements';

function Button({description, extra}) {
  return (
    <Container>
      <Description extra={extra}>{description}</Description>
      {extra}
    </Container>
  );
}

export default Button;
