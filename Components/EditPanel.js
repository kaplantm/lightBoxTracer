import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from '../utils/theme';
import colors from '../utils/colors';
import TraceImage from './TraceImage';
import Container from './Container';
import SliderComponent from './SliderComponent';

type Props = {};
class EditPanel extends Component<Props> {
  static propTypes = {
    onSliderChange: PropTypes.func,
    sliderValues: PropTypes.shape({
      saturationValue: PropTypes.number,
      contrastValue: PropTypes.number,
      brightnessValue: PropTypes.number,
    }),
  };

  get onSliderChange() {
    const { onSliderChange } = this.props;
    return onSliderChange;
  }

  getFilterData = () => {
    const { saturationValue, contrastValue, brightnessValue } = this.state;
    return {
      saturationValue: saturationValue ** 2,
      contrastValue: contrastValue ** 2,
      brightnessValue: brightnessValue ** 2,
    };
  }

  getTraceImage = () => {
    const { image, imageViewWidth, imageViewHeight } = this.state;
    return (
      image
        ? (
          <TraceImage
            image={image}
            height={imageViewHeight}
            width={imageViewWidth}
            filterData={this.getFilterData()}
          />
        )
        : this.renderLoading()
    );
  }

  getSlider = (stateKey, label) => {
    const { sliderValues } = this.props;
    const { [stateKey]: initialValue } = sliderValues;
    return (
      <SliderComponent
        onValueChange={(value) => this.onSliderChange(stateKey, value)}
        label={label}
        style={{ width: '100%' }}
        value={initialValue}
        minimumValue={0}
        maximumValue={3}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    );
  }

  render() {
    return (
      <Container styles={[
        { backgroundColor: colors.offWhite,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: -20,
        }, theme.shaded, {
          shadowOffset: {
            width: 0,
            height: -4,
          } }, theme.noFlex, theme.padded]}
      >
        {this.getSlider('saturationValue', 'Saturation')}
        {this.getSlider('contrastValue', 'Contrast')}
        {this.getSlider('brightnessValue', 'Brightness')}
      </Container>
    );
  }
}

export default EditPanel;
