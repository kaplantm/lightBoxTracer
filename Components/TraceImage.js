/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import {
  ColorMatrix,
  concatColorMatrices,
  contrast,
  saturate,
  brightness,
} from 'react-native-color-matrix-image-filters';

// TODO need to make sure we await camera permissions? didn't work correctly
// first time when asking for camera permissions
// maybe ask for camera roll permissions at startup?

const ColorMatrixImage = (imageProps, filterData) => {
  const { contrastValue, saturationValue, brightnessValue } = filterData;
  return (
    <ColorMatrix
      matrix={concatColorMatrices([contrast(contrastValue), saturate(saturationValue), brightness(brightnessValue)])}
    >
      <Image {...imageProps} />
    </ColorMatrix>
  );
};

// TODO Issue popup with info about how to edit trace mode
// https://kmagiera.github.io/react-native-gesture-handler/docs/handler-tap.html#minpointers
type Props = {};
class TraceImage extends Component<Props> {
  static propTypes = {
    image: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    filterData: PropTypes.shape({
      contrastValue: PropTypes.number.isRequired,
      saturationValue: PropTypes.number.isRequired,
      brightnessValue: PropTypes.number.isRequired,
    }),
  };

  static defaultProps = {
    filterData: {
      contrastValue: 1,
      saturationValue: 1,
      brightnessValue: 1,
    },
  };

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
