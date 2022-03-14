import {
  Container,
  Divider,
  Title,
} from './Elements';
import {STATES} from '../../constants';

function Header({title}) {
  return (
    <Container>
      <Divider />
      <Title>{title}</Title>
      <Divider />
    </Container>
  );
}

export default Header;
