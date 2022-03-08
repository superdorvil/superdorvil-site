import {
  SideBarContainer,
} from './Elements';
import SideButton from './SideButton';
import {STATES} from '../../constants';

function SideBarButtons({buttonPressed, appMode}) {
  return (
    <SideBarContainer>
      <SideButton
        buttonPressed={buttonPressed}
        description={STATES.appMode.home}
        appMode={appMode}
      />
      <SideButton
        buttonPressed={buttonPressed}
        description={STATES.appMode.portfolio}
        appMode={appMode}
      />
      <SideButton
        buttonPressed={buttonPressed}
        description={STATES.appMode.skills}
        appMode={appMode}
      />
      <SideButton
        buttonPressed={buttonPressed}
        description={STATES.appMode.contact}
        appMode={appMode}
      />
      {/*<SideButton
        buttonPressed={buttonPressed}
        description={STATES.appMode.freedom}
        appMode={appMode}
      />*/}
      <SideButton
        buttonPressed={buttonPressed}
        description={STATES.appMode.about}
        appMode={appMode}
      />
    </SideBarContainer>
  );
}

export default SideBarButtons;
