import {Container, Skill, Languages} from './Elements';
import Header from '../Header';
import {STATES} from '../../constants';

function Skills() {
  return (
    <Container id={STATES.appMode.skills}>
      <Header title="Skills & Experience" />
      <Skill>Blockchain Development</Skill>
      <Languages>Solidity, Truffle, Ganache, IPFS, Web3.js</Languages>
      <Skill>Frontend Development</Skill>
      <Languages>React JS, React Native, HTML, CSS, Styled-Components</Languages>
      <Skill>Backend Development</Skill>
      <Languages>MongoDB / Realm, Express JS, Next Js</Languages>
      <Skill>Career Experience</Skill>
      <Languages>5 years experience as a software engineer for Electric Boat creating test simulators for Submarines. Majority of the work was in C++ and some in python</Languages>
      <Skill>Design Experience</Skill>
      <Languages>Fimga, Sketch, SVG code, basic SVG animations, and basic UI/UX design.</Languages>
    </Container>
  );
}

export default Skills;
