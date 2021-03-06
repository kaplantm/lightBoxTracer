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
    const { image, width, height, filterData, flipped, rotation } = this.props;
    const scale = flipped ? -1 : 1;
    const rotateValue = `${rotation % 360}deg`;

    const widthPostRotation = (rotation % 180) ? height : width;
    const heightPostRotation = (rotation % 180) ? width : height;

    const imageProps = {
      source: {
        uri: image,
      },
      resizeMode: 'contain',
      style: {
        marginTop: rotation % 180 ? 20 : 0,
        width: widthPostRotation,
        height: heightPostRotation,
        transform: [{ scaleX: scale }, { rotate: rotateValue }],
      },
    };

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
