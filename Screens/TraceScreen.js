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
import PinchableBox from '../Components/PinchableBox';
import EditPanel from '../Components/EditPanel';

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
    console.log('setStateByObject', object);
    object && this.setState(object);
  }

  // TODO change container styles to style
  render() {
    const { showingSelectMode, showingEditMode } = this.state;
    const firstIcon = showingSelectMode ? 'image' : 'rotate-left';
    const secondIcon = showingSelectMode ? 'zoom-out-map' : 'flip';
    const touchable = !showingSelectMode && !showingEditMode;

    return (
      <Container style={theme.pageContainer}>
        {/* This view prevents the image from showing out of the safeArea when scaled */}
        <View style={{ backgroundColor: colors.offWhite, height: 100, marginTop: -100, zIndex: 10 }} />
        <Container styles={[theme.contentContainer]} onLayout={this.onLayout}>
          <PinchableBox onLongPress={() => this.setStateByObject({ showingSelectMode: true, showingEditMode: false })} touchable={touchable}>
            {this.getTraceImage()}
          </PinchableBox>
        </Container>
        {(showingSelectMode || showingEditMode) && (
          <Container styles={[{ position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: 'red' }, theme.noFlex]}>
            <Container styles={[{ position: 'absolute', top: 20, left: 10, padding: 10, backgroundColor: colors.slateTransparent, borderWith: 5, borderColor: colors.offWhite, borderRadius: 10 }, theme.noFlex]}>
              <TouchableOpacity onPress={() => this.setStateByObject({ showingSelectMode: false, showingEditMode: true })}>
                <MaterialIcon
                  name={firstIcon}
                  size={50}
                  color={colors.white}
                  style={[theme.shaded, {
                    opacity: 0.8,
                    shadowOpacity: 0.5,
                    shadowOffset: {
                      width: 2,
                      height: 2,
                    } }]}
                />
              </TouchableOpacity>
            </Container>
            <Container styles={[{ position: 'absolute', top: 20, left: 80, padding: 10, backgroundColor: colors.slateTransparent, borderWith: 5, borderColor: colors.offWhite, borderRadius: 10 }, theme.noFlex]}>
              <MaterialIcon
                name={secondIcon}
                size={50}
                color={colors.white}
                style={[theme.shaded, {
                  opacity: 0.8,
                  shadowOpacity: 0.5,
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  } }]}
              />
            </Container>
            <Container styles={[{ position: 'absolute', top: 20, right: 80, padding: 10, backgroundColor: colors.slateTransparent, borderWith: 5, borderColor: colors.offWhite, borderRadius: 10 }, theme.noFlex]}>
              <MaterialIcon
                name="undo"
                size={50}
                color={colors.white}
                style={[theme.shaded, {
                  opacity: 0.8,
                  shadowOpacity: 0.5,
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  } }]}
              />
            </Container>
            <Container styles={[{ position: 'absolute', top: 20, right: 20, padding: 10, backgroundColor: colors.slateTransparent, borderWith: 5, borderColor: colors.offWhite, borderRadius: 10 }, theme.noFlex]}>
              <MaterialIcon
                name="close"
                size={50}
                color={colors.white}
                style={[theme.shaded, {
                  opacity: 0.8,
                  shadowOpacity: 0.5,
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  } }]}
              />
            </Container>
          </Container>
        )}

        {showingEditMode && <EditPanel onSliderChange={this.onSliderChange} />}

        {/* This view prevents the image from showing out of the safeArea when scaled */}
        <View style={{ backgroundColor: colors.offWhite, height: 100, marginBottom: -100, zIndex: 10 }} />
      </Container>
    );
  }
}

export default withSafeArea(TraceScreen);
