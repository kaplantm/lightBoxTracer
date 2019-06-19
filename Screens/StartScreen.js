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
  Image
} from "react-native";
import { Navigation } from "react-native-navigation";
import styles from "../utils/styles";
import withSafeArea from "../utils/withSafeArea";
import colors from "../utils/colors";
import Header from "../Components/Header";
import Cta from "../Components/Cta";

type Props = {};
class StartScreen extends Component<Props> {

  pickImage = () => {
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog(
      {},
      imageUri => {
        this.onClickLoadImage(imageUri);
      },
      () => console.log("Cancelled")
    );
  }

  onClickLoadImage = async image => {
    await Navigation.push(this.props.componentId, {
      component: {
        passProps: {
          // Props come in keys by name. Wrapping all in navigationParams to group
          navigationParams: {
            image
          }
        },
        name: "navigation.playground.TraceScreen"
      }
    });
  };

  render() {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.contentContainer}>
          <Header />
          <Text style={styles.bodyText}>Select an image to trace.</Text>
          <Button title="Push" onPress={this.onClickLoadImage} />
          <Cta text="Load Image" action={this.pickImage} />
          {/* {this.state.image?
          <Image style={{ width: 50, height: 50 }} source={{ uri: this.state.image }} /> :
          null
        } */}
        </View>
      </View>
    );
  }
}

// export default StartScreen;
export default withSafeArea(StartScreen);
