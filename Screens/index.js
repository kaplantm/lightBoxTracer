import { Navigation } from "react-native-navigation";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";

const registerScreens = () => {
  Navigation.registerComponent(`navigation.playground.Screen1`, () => Screen1);
  Navigation.registerComponent(`navigation.playground.Screen2`, () => Screen2);
  Navigation.registerComponent(`navigation.playground.Screen3`, () => Screen3);
};

export default registerScreens;