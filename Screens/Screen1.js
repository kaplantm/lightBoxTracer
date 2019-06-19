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
    
      onClickPush = async () => {
        await Navigation.push(this.props.componentId, {
          component: {
            passProps: {
              // Props come in keys by name. Wrapping all in navigationParams to group
              navigationParams: {
                text: "neato!"
              }
            },
            name: 'navigation.playground.Screen3'
          },
        });
      }

  render() {
      console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Screen 1</Text>
        <Text style={styles.instructions}>{this.props.navigationParams ? this.props.navigationParams.text : "no params"}</Text>
        <Button title='Push' onPress={this.onClickPush} />
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
