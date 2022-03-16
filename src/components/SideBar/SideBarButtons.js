import {SideBarContainer, SideButton} from './Elements';
import {STATES} from '../../constants';

function SideBarButtons() {
  return (
    <SideBarContainer>
      <SideButton
        to={STATES.appMode.home}
        spy={true}
        smooth={true}
        duration={500}>
        {STATES.appMode.home}
      </SideButton>
      <SideButton
        to={STATES.appMode.portfolio}
        spy={true}
        smooth={true}
        duration={500}>
        {STATES.appMode.portfolio}
      </SideButton>
      <SideButton
        to={STATES.appMode.skills}
        spy={true}
        smooth={true}
        duration={500}>
        {STATES.appMode.skills}
      </SideButton>
      <SideButton
        to={STATES.appMode.contact}
        spy={true}
        smooth={true}
        duration={500}>
        {STATES.appMode.contact}
      </SideButton>
      <SideButton
        to={STATES.appMode.about}
        spy={true}
        smooth={true}
        duration={500}>
        {STATES.appMode.about}
      </SideButton>
    </SideBarContainer>
  );
}

export default SideBarButtons;
