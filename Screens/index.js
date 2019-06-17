import { Navigation } from "react-native-navigation";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

const registerScreens = () => {
  Navigation.registerComponent(`navigation.playground.Screen1`, () => Screen1);
  Navigation.registerComponent(`navigation.playground.Screen2`, () => Screen2);
};

export default registerScreens;