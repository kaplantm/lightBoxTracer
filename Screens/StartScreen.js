/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, Text, View, Button, SafeAreaView } from "react-native";
import { Navigation } from "react-native-navigation";
import styles from "../utils/styles";
import withSafeArea from "../utils/withSafeArea";
import colors from "../utils/colors";
import Header from "../Components/Header";
import Cta from "../Components/Cta";

type Props = {};
class StartScreen extends Component<Props> {
  onClickLoadImage = async () => {
    await Navigation.push(this.props.componentId, {
      component: {
        passProps: {
          // Props come in keys by name. Wrapping all in navigationParams to group
          navigationParams: {
            text: "neato!"
          }
        },
        name: "navigation.playground.TraceScreen"
      }
    });
  };

  render() {
    console.log(this.props);
    return (
      <View style={styles.pageContainer}>
          <View style={styles.contentContainer}>
          <Header />
            <Text style={styles.bodyText}>Select an image to trace.</Text>
            {/* <Button title="Push" onPress={this.onClickPush} /> */}
            <Cta text="Load Image" action={this.onClickLoadImage}/>
          </View>
      </View>
    );
  }
}

const safeAreaOptions = {
  style: { backgroundColor: styles.pageContainer.backgroundColor }
};

// export default StartScreen;
export default withSafeArea(StartScreen, safeAreaOptions);
