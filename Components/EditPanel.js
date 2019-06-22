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
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import theme from '../utils/theme';
import withSafeArea from '../utils/withSafeArea';
import colors from '../utils/colors';
import Header from './Header';
import Cta from './Cta';
import TraceImage from './TraceImage';
import Container from './Container';
import SliderComponent from './SliderComponent';
import PinchableBox from './PinchableBox';

// Issue popup with info about how to edit trace mode
// https://kmagiera.github.io/react-native-gesture-handler/docs/handler-tap.html#minpointers
type Props = {};
class EditPanel extends Component<Props> {
  static propTypes = {
    onSliderChange: PropTypes.func,
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
    return (
      <SliderComponent
        onValueChange={(value) => this.onSliderChange(stateKey, value)}
        label={label}
        style={{ width: '100%' }}
        value={1}
        minimumValue={0}
        maximumValue={3}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    );
  }

  render() {
    return (
      <Container>
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

          <FontAwesomeIcon name="lock" size={30} color={colors.slate} />
          <FontAwesomeIcon name="unlock-alt" size={30} color={colors.slate} />
          <MaterialIcon name="rotate-left" size={30} color={colors.slate} />
          <MaterialIcon name="flip" size={30} color={colors.slate} />
        </Container>
        {this.getSlider('saturationValue', 'Saturation')}
        {this.getSlider('contrastValue', 'Contrast')}
        {this.getSlider('brightnessValue', 'Brightness')}
      </Container>
    );
  }
}

export default EditPanel;
