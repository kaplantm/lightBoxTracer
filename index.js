// /**
//  * @format
//  */

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
              name: 'navigation.playground.TraceScreen',
              // name: 'navigation.playground.StartScreen',
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
