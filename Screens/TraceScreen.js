/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { Navigation } from "react-native-navigation";

type Props = {};
export default class App extends Component<Props> {
  onClickPop = async () => {
    await Navigation.pop(this.props.componentId);
  }

  onClickSwitchToTab() {
    Navigation.mergeOptions(this.props.componentId, {
      bottomTabs: {
        currentTabIndex: 0,
        // visible: false,
        drawBehind: true,
        animate: true
      }
    });
  }

  render() {
      console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>TraceScreen</Text>
        {/* <Text style={styles.instructions}>{this.props.navigationParams.text}</Text> */}

        <Button title={'pop'} onPress={() => this.onClickPop()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
