// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// require('./Screens/index.js');

import { Navigation } from "react-native-navigation";
import registerScreens from "./Screens/index.js";

registerScreens();

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: "navigation.playground.Screen1"
//       }
//     }
//   });
// });

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       bottomTabs: {
//         children: [
//           {
//             stack: {
//               children: [
//                 {
//                   component: {
//                     name: "navigation.playground.Screen1",
//                     passProps: {
//                       // Props come in keys by name. Wrapping all in navigationParams to group
//                       navigationParams: {
//                         text: "This is tab 1. I'm in a stack!"
//                       }
//                     }
//                   }
//                 }
//               ],
//               options: {
//                 bottomTab: {
//                   text: "Tab 1",
//                   // icon: require('../images/one.png'),
//                   testID: "FIRST_TAB_BAR_BUTTON"
//                 }
//               }
//             }
//           },
//           {
//             component: {
//               name: "navigation.playground.Screen2",
//               passProps: {
//                 navigationParams: {
//                   text: "This is tab 2.  I'm NOT in a stack"
//                 }
//               },
//               options: {
//                 bottomTab: {
//                   text: "Tab 2",
//                   // icon: require('../images/two.png'),
//                   testID: "SECOND_TAB_BAR_BUTTON"
//                 }
//               }
//             }
//           }
//         ]
//       }
//     }
//   });
// });

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         options: {
//           topBar: {
//             visible: false
//           }
//         },
//         children: [
//           {
//             component: {
//               name: "navigation.playground.Screen1",
//               passProps: {
//                 text: "This is tab 1",
//                 myFunction: () => "Hello from a function!"
//               }
//             }
//           },
//           {
//             component: {
//               name: "navigation.playground.Screen2",
//               passProps: {
//                 text: "This is tab 2"
//               }
//             }
//           }
//         ]
//       }
//     }
//   });
// });
