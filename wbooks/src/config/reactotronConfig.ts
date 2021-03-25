import { NativeModules } from 'react-native';
import Reactotron, { trackGlobalErrors, overlay } from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tronsauce from 'reactotron-apisauce';
import { reactotronRedux } from 'reactotron-redux';
import Immutable from 'seamless-immutable';

interface Tron {
  log: (...args: any[]) => void;
  clear: () => void;
  customCommand: (arg: any) => void;
  display: (arg: any) => void;
}

declare global {
  interface Console {
    tron: Tron;
  }
}

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];

  Reactotron.configure({ name: 'wbooks', host: scriptHostname })
    .use(trackGlobalErrors())
    .use(tronsauce())
    .use(
      reactotronRedux({
        onRestore: state =>
          Object.entries(state).reduce(
            (prev, [key, value]) => ({ ...prev, [key]: key === 'nav' ? value : Immutable(value) }),
            {}
          )
      })
    )
    .use(overlay())
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  // eslint-disable-next-line no-console
  console.tron = {
    log: Reactotron.logImportant,
    clear: Reactotron.clear,
    customCommand: Reactotron.onCustomCommand,
    display: Reactotron.display
  };
}

export default Reactotron;
