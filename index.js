import React, { Component } from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import { Provider } from 'react-redux'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import App from '@src/App';
import storeApp from '@redux/store';

import {name as appName} from './app.json';

//Ignore Warnings
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  }
};

class Index extends Component {
  render() {
    return (
      <Provider store={storeApp}>
        <PaperProvider theme={theme}>
          <App />
        </PaperProvider>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => Index);