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
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import theme from '../utils/theme';
import withSafeArea from '../utils/withSafeArea';
import colors from '../utils/colors';
import Header from '../Components/Header';
import Cta from '../Components/Cta';
import TraceImage from '../Components/TraceImage';
import Container from '../Components/Container';
import SliderComponent from '../Components/SliderComponent';
import EditPanel from '../Components/EditPanel';
import ImageOverlayButtons from '../Components/ImageOverlayButtons';
import TraceImageContainer from '../Components/TraceImageContainer';

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
    brightnessValue: 1,
    showingSelectMode: false,
    showingEditMode: false,
    showingScaleMode: false,
  }

  onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    const { navigationParams } = this.props;
    const image = navigationParams ? navigationParams.image : null;

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

  setStateByObject = (object) => {
    object && this.setState(object);
  }

  onLongImagePress = () => {
    this.setStateByObject({ showingSelectMode: true, showingEditMode: false, showingScaleMode: false });
  }

  // TODO change container styles to style
  render() {
    const { showingSelectMode, showingEditMode, showingScaleMode } = this.state;
    const tappable = !showingSelectMode && !showingEditMode;
    const scalable = !showingSelectMode && !showingEditMode;

    return (
      <Container style={theme.pageContainer}>
        {/* This view prevents the image from showing out of the safeArea when scaled */}
        <Container styles={[theme.contentContainer, theme.unpadded]} onLayout={this.onLayout}>
          <TraceImageContainer onLongPress={this.onLongImagePress} tappable={tappable} scalable={scalable}>
            {this.getTraceImage()}
          </TraceImageContainer>
        </Container>
        {(showingSelectMode || showingEditMode)
        && (
        <ImageOverlayButtons
          showingSelectMode={showingSelectMode}
          showingScaleMode={showingScaleMode}
          setStateByObject={this.setStateByObject}
        />
        ) }
        {showingEditMode && <EditPanel onSliderChange={this.onSliderChange} />}
        {/* This view prevents the image from showing out of the safeArea when scaled */}
      </Container>
    );
  }
}

export default withSafeArea(TraceScreen);
