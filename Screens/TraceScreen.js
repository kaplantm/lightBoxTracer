/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  Text,
  View,
  Button,
  SafeAreaView,
  ImagePickerIOS,
  Dimensions,
  Image
} from "react-native";
import { Navigation } from "react-native-navigation";
import styles from "../utils/styles";
import withSafeArea from "../utils/withSafeArea";
import colors from "../utils/colors";
import Header from "../Components/Header";
import Cta from "../Components/Cta";

// Issue popup with info about how to edit trace mode
//https://kmagiera.github.io/react-native-gesture-handler/docs/handler-tap.html#minpointers
type Props = {};
class TraceScreen extends Component<Props> {
  get imageDimensions() {
    const { width, height } = Dimensions.get("window");
    const verticalPadding = 100;
    return { width, height: height - verticalPadding };
  }
  render() {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.contentContainer}>
          {this.props.navigationParams && this.props.navigationParams.image ? (
            <Image
              style={this.imageDimensions}
              source={{ uri: this.props.navigationParams.image }}
            />
          ) : null}
        </View>
      </View>
    );
  }
}

export default withSafeArea(TraceScreen);
