/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Button,
  SafeAreaView,
  ImagePickerIOS,
  Dimensions,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import styles from '../utils/styles';
import withSafeArea from '../utils/withSafeArea';
import colors from '../utils/colors';
import Header from '../Components/Header';
import Cta from '../Components/Cta';
import TraceImage from '../Components/TraceImage';

// Issue popup with info about how to edit trace mode
// https://kmagiera.github.io/react-native-gesture-handler/docs/handler-tap.html#minpointers
type Props = {};
class TraceScreen extends Component<Props> {
  static propTypes = {
    navigationParams: PropTypes.shape({
      image: PropTypes.string.isRequired,
    }),
  };

  state = {
    imageViewHeight: undefined,
    imageViewWidth: undefined,
    image: undefined,
  }

  // get imageDimensions() {
  //   const { width, height } = Dimensions.get('window');
  //   const verticalPadding = 100;
  //   return { width, height: height - verticalPadding };
  // }

  onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    console.log(event.nativeEvent.layout);
    const { navigationParams } = this.props;
    const image = navigationParams ? navigationParams.image : null;
    this.setState({
      imageViewHeight: height,
      imageViewWidth: width,
      image,
    });
  }

  renderLoading = () => {
    return (
      <Text>Loading...</Text>
    );
  }

  render() {
    const { image, imageViewWidth, imageViewHeight } = this.state;
    return (
      <View style={styles.pageContainer}>
        <View style={styles.contentContainer} onLayout={this.onLayout}>
          {image ? <TraceImage image={image} height={imageViewHeight} width={imageViewWidth} /> : this.renderLoading()}
        </View>
      </View>
    );
  }
}

export default withSafeArea(TraceScreen);
