import {
  SideBarContainer,
} from './Elements';
import SideButton from './SideButton';

const appMode = {
  home: 'Home',
  portfolio: 'Portfolio',
  skills: 'Skills',
  contact: 'Contact',
  freedom: 'Freedom',
  about: 'About',
};

function SideBarButtons({buttonPressed, currentMode}) {
  return (
    <SideBarContainer>
      <SideButton
        buttonPressed={buttonPressed}
        description={appMode.home}
        currentMode={currentMode}
      />
      <SideButton
        buttonPressed={buttonPressed}
        description={appMode.portfolio}
        currentMode={currentMode}
      />
      <SideButton
        buttonPressed={buttonPressed}
        description={appMode.skills}
        currentMode={currentMode}
      />
      <SideButton
        buttonPressed={buttonPressed}
        description={appMode.contact}
        currentMode={currentMode}
      />
      {/*<SideButton
        buttonPressed={buttonPressed}
        description={appMode.freedom}
        currentMode={currentMode}
      />*/}
      <SideButton
        buttonPressed={buttonPressed}
        description={appMode.about}
        currentMode={currentMode}
      />
    </SideBarContainer>
  );
}

export default SideBarButtons;
