/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  ImagePickerIOS,
} from 'react-native';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import styles from '../utils/styles';
import withSafeArea from '../utils/withSafeArea';
import Header from '../Components/Header';
import Cta from '../Components/Cta';

type Props = {};
class StartScreen extends Component<Props> {
  static propTypes = {
    componentId: PropTypes.string,
  };

  pickImage = () => {
    // openSelectDialog(config, successCallback, errorCallback);
    ImagePickerIOS.openSelectDialog(
      {},
      imageUri => {
        this.onClickLoadImage(imageUri);
      },
      () => console.log('Cancelled'),
    );
  }

  onClickLoadImage = async image => {
    const { componentId } = this.props;
    await Navigation.push(componentId, {
      component: {
        passProps: {
          // Props come in keys by name. Wrapping all in navigationParams to group
          navigationParams: {
            image,
          },
        },
        name: 'navigation.playground.TraceScreen',
      },
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
