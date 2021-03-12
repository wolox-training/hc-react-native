if (__DEV__) {
  import('./src/config/reactotronConfig').then(() => {
    // eslint-disable-next-line no-console
    console.log('Reactotron Configured');
  });
}
import React from 'react';

import App from './src/app';

export default function index() {
  return <App />;
}
