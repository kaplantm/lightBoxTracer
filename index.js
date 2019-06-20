// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// require('./Screens/index.js');

import { Navigation } from 'react-native-navigation';
import registerScreens from './Screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        options: {
          topBar: {
            visible: false,
          },
        },
        children: [
          {
            component: {
              name: 'navigation.playground.StartScreen',
              passProps: {
                text: 'This is tab 1',
                myFunction: () => 'Hello from a function!',
              },
            },
          },
        ],
      },
    },
  });
});
