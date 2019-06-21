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
import theme from '../utils/theme';
import withSafeArea from '../utils/withSafeArea';
import colors from '../utils/colors';
import Header from '../Components/Header';
import Cta from '../Components/Cta';
import TraceImage from '../Components/TraceImage';
import Container from '../Components/Container';
import SliderComponent from '../Components/SliderComponent';

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
    saturationValue: 1,
    contrastValue: 1,
  }

  // get imageDimensions() {
  //   const { width, height } = Dimensions.get('window');
  //   const verticalPadding = 100;
  //   return { width, height: height - verticalPadding };
  // }

  onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    const { navigationParams } = this.props;
    const image = navigationParams ? navigationParams.image : null;
    console.log('onLayout');
    this.setState({
      imageViewHeight: height,
      imageViewWidth: width,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/440px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    });
  }

  renderLoading = () => {
    return (
      <Text>Loading...</Text>
    );
  }

  onSliderChange = (stateKey, value) => {
    this.setState({
      [stateKey]: value,
    });
  }

  render() {
    const { image, imageViewWidth, imageViewHeight, saturationValue, contrastValue } = this.state;
    const filterData = { saturationValue: saturationValue ** 2, contrastValue: contrastValue ** 2 };
    return (
      <Container style={theme.pageContainer}>
        <Container styles={[theme.contentContainer]} onLayout={this.onLayout}>
          {image
            ? <TraceImage image={image} height={imageViewHeight} width={imageViewWidth} filterData={filterData} />
            : this.renderLoading()}
        </Container>
        <Container styles={[
          { flexDirection: 'row',
            borderWidth: 5,
            backgroundColor: 'hsla(0, 0%, 90%, 1)',
            borderBottomWidth: 0,
            borderColor: 'hsla(0, 0%, 90%, 1)',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            marginTop: -20,
            justifyContent: 'space-around',
          }, theme.shaded, {
            shadowOffset: {
              width: 0,
              height: -4,
            } }, theme.noFlex, theme.padded]}
        >
          <Text>Rr</Text>
          <Text>Rl</Text>
          <Text>Mh</Text>
          <Text>Mv</Text>
        </Container>
        <SliderComponent
          onValueChange={(value) => this.onSliderChange('saturationValue', value)}
          label="Saturation"
          style={{ width: '100%' }}
          value={1}
          minimumValue={0}
          maximumValue={3}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <SliderComponent
          onValueChange={(value) => this.onSliderChange('contrastValue', value)}
          label="Contrast"
          style={{ width: '100%' }}
          value={1}
          minimumValue={0}
          maximumValue={3}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </Container>
    );
  }
}

export default withSafeArea(TraceScreen);
