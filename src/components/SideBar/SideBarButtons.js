import {SideBarContainer} from './Elements';
import SideButton from './SideButton';
import {STATES} from '../../constants';

function SideBarButtons() {
  return (
    <SideBarContainer>
      <SideButton description={STATES.appMode.home} />
      <SideButton description={STATES.appMode.portfolio} />
      <SideButton description={STATES.appMode.skills} />
      <SideButton description={STATES.appMode.contact} />
      {/*<SideButton description={STATES.appMode.freedom} />*/}
      <SideButton description={STATES.appMode.about} />
    </SideBarContainer>
  );
}

export default SideBarButtons;
