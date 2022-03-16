import {Container,Description} from './Elements';

function ScrollButton({to, description}) {
  return (
    <Container
      to={to}
      spy={true}
      smooth={true}
      duration={500}>
      <Description>{description}</Description>
    </Container>
  );
}

export default ScrollButton;
