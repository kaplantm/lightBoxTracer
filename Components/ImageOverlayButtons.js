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
import colors from '../utils/colors';
import Container from './Container';
import IconButton from './IconButton';

const ImageOverlayButtons = (props) => {
  const { setStateByObject, setStateByFunction } = props;

  const resetModesState = { showingSelectMode: false, showingEditMode: false, showingScaleMode: false };

  const onClickEdit = () => {
    setStateByObject({ ...resetModesState, showingEditMode: true, shouldUpdateLayout: true });
  };

  const onClickClose = () => {
    const updateFunction = (state) => {
      const shouldUpdateLayout = state.showingEditMode;
      return { ...resetModesState, shouldUpdateLayout };
    };
    setStateByFunction(updateFunction);
  };

  const onClickReset = () => {
    setStateByObject({
      saturationValue: 1,
      contrastValue: 1,
      brightnessValue: 1,
      flipped: false,
      rotation: 0,
    });
  };

  const onClickScale = () => {
    setStateByObject({ ...resetModesState, showingScaleMode: true });
  };
  const onClickRotate = () => {
    const updateFunction = (state) => ({
      rotation: (state.rotation + 90) % 360,
    });
    setStateByFunction(updateFunction);
  };
  const onClickMirror = () => {
    const updateFunction = (state) => ({
      flipped: !state.flipped,
    });
    setStateByFunction(updateFunction);
  };

  const closeButton = {
    icon: 'close',
    onPress: onClickClose,
  };
  const resetButton = {
    icon: 'settings-backup-restore',
    onPress: onClickReset,
  };
  const scaleButton = {
    icon: 'zoom-out-map',
    onPress: onClickScale,
  };
  const editButton = {
    icon: 'image',
    onPress: onClickEdit,
  };
  const mirrorButton = {
    icon: 'flip',
    onPress: onClickMirror,
  };
  const rotateButton = {
    icon: 'rotate-left',
    onPress: onClickRotate,
  };


  const getButtonsDefinition = () => {
    const { showingSelectMode, showingScaleMode } = props;
    let buttons = [];

    if (showingSelectMode) {
      buttons = [editButton, scaleButton, closeButton];
    } else if (showingScaleMode) {
      buttons = [closeButton];
    } else {
      buttons = [rotateButton, mirrorButton, resetButton, closeButton];
    }

    return buttons;
  };

  const getButtons = () => {
    const { buttonsDefinition } = props;
    const buttonsArray = buttonsDefinition || getButtonsDefinition();
    return buttonsArray.map((button, index) => {
      const { icon } = button;
      const alignEnd = index === buttonsArray.length - 1;
      return <IconButton {...button} key={icon} alignEnd={alignEnd} />;
    });
  };

  return (
    <View style={[theme.absoluteFull, theme.padded, {
      backgroundColor: colors.slateTransparent,
      bottom: undefined,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }]}
    >
      {getButtons()}
    </View>
  );
};

ImageOverlayButtons.propTypes = {
  setStateByFunction: PropTypes.func,
  setStateByObject: PropTypes.func,
  showingSelectMode: PropTypes.bool,
  showingScaleMode: PropTypes.bool,
  buttonsDefinition: PropTypes.arrayOf(PropTypes.object),

};

export default ImageOverlayButtons;
