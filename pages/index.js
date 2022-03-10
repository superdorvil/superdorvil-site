import store from '../src/redux/store';
import { Provider } from 'react-redux';
import EthBackground from '/src/components/EthBackground';
import MainPage from '/src/components/MainPage';
import SideBar from '/src/components/SideBar';

function SuperDorvil() {
  return (
    <Provider store={store}>
      <EthBackground>
        <SideBar />
        <MainPage />
      </EthBackground>
    </Provider>
  )
}

export default SuperDorvil;
