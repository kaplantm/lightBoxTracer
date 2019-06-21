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
import Slider from '@react-native-community/slider';
import {
  Grayscale,
  Sepia,
  Tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  contrast,
  saturate,
} from 'react-native-color-matrix-image-filters';
import theme from '../utils/theme';
import withSafeArea from '../utils/withSafeArea';
import colors from '../utils/colors';
import Header from './Header';
import Cta from './Cta';
import Container from './Container';

// TODO need to make sure we await camera permissions? didn't work correctly first time when asking for camera permissions
// maybe ask for camera roll permissions at startup?

const GrayscaledImage = (imageProps) => (
  <Grayscale>
    <Image {...imageProps} />
  </Grayscale>
);

const CombinedFiltersImage = (imageProps) => (
  <Tint amount={1.25}>
    <Sepia>
      <Image {...imageProps} />
    </Sepia>
  </Tint>
);

const ColorMatrixImage = (imageProps, filterData) => {
  console.log('ColorMatrixImage', filterData);
  const { contrastValue, saturationValue } = filterData;
  return (
    <ColorMatrix
      matrix={concatColorMatrices([contrast(contrastValue), saturate(saturationValue)])}
    >
      <Image {...imageProps} />
    </ColorMatrix>
  );
};

// Issue popup with info about how to edit trace mode
// https://kmagiera.github.io/react-native-gesture-handler/docs/handler-tap.html#minpointers
type Props = {};
class TraceImage extends Component<Props> {
  static propTypes = {
    image: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    filterData: PropTypes.shape({
      contrastValue: PropTypes.string.isRequired,
      saturationValue: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    filterData: {
      contrastValue: 1,
      saturationValue: 1,
    },
  };

  //   state = {
  //     imageViewHeight: undefined,
  //     imageViewWidth: undefined,
  //     image: undefined,
  //   }

  // get imageDimensions() {
  //   const { width, height } = Dimensions.get('window');
  //   const verticalPadding = 100;
  //   return { width, height: height - verticalPadding };
  // }

  //   onLayout = (event) => {
  //     const { width, height } = event.nativeEvent.layout;
  //     console.log(event.nativeEvent.layout);
  //     const { navigationParams } = this.props;
  //     const image = navigationParams ? navigationParams.image : null;
  //     this.setState({
  //       imageViewHeight: height,
  //       imageViewWidth: width,
  //       image,
  //     });
  //   }

  renderImage = () => {
    const { image, width, height, filterData } = this.props;
    const imageProps = {
      source: {
        uri: image,
      },
      style: { width, height } };
    return (
      ColorMatrixImage(imageProps, filterData)
    );
  }

  render() {
    return (
      this.renderImage()
    );
  }
}

export default TraceImage;
