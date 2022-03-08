import {useState} from 'react';
import EthBackground from '/src/components/EthBackground';
import MainPage from '/src/components/MainPage';
import SideBar from '/src/components/SideBar';
import {STATES} from '../src/constants';

function SuperDorvil() {
  const [appMode, setAppMode] = useState(STATES.appMode.home);
  const [projectMode, setProjectMode] = useState(STATES.projectMode.none);

  return (
    <EthBackground>
      <SideBar appMode={appMode} sideButtonPressed={(mode) => setAppMode(mode)} />
      <MainPage
        appMode={appMode}
        projectMode={projectMode}
        projectPressed={(mode) => setProjectMode(mode)}
      >
      </MainPage>
    </EthBackground>
  )
}

export default SuperDorvil;
