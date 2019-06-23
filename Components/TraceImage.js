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
    flipped: PropTypes.bool,
    rotation: PropTypes.number,
    filterData: PropTypes.shape({
      contrastValue: PropTypes.number.isRequired,
      saturationValue: PropTypes.number.isRequired,
      brightnessValue: PropTypes.number.isRequired,
    }),
  };

  static defaultProps = {
    flipped: false,
    rotation: 0,
    filterData: {
      contrastValue: 1,
      saturationValue: 1,
      brightnessValue: 1,
    },
  };

  renderImage = () => {
    // TODO: reset also needs to reset rotation
    const { image, width, height, filterData, flipped, rotation } = this.props;
    const scale = flipped ? -1 : 1;
    const rotateValue = `${rotation % 360}deg`;
    const scaleDiection = 'scaleX';
    // rotateValue % 90 ? 'scaleY' : 'scaleX';

    console.log({ flipped, rotation, scale, scaleDiection, rotateValue });
    const imageProps = {
      source: {
        uri: image,
      },
      style: { width, height, transform: [{ [scaleDiection]: scale }, { rotate: rotateValue }] } };
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
