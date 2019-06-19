import { Navigation } from "react-native-navigation";
import StartScreen from "./StartScreen";
import TraceScreen from "./TraceScreen";

const registerScreens = () => {
  Navigation.registerComponent(
    `navigation.playground.StartScreen`,
    () => StartScreen
  );
  Navigation.registerComponent(
    `navigation.playground.TraceScreen`,
    () => TraceScreen
  );
};

export default registerScreens;
