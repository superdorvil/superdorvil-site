import {AboutContainer, AboutDescription} from './Elements';

function About({description}) {
  return (
    <AboutContainer>
      <AboutDescription>{description}</AboutDescription>
    </AboutContainer>
  );
}

export default About;
