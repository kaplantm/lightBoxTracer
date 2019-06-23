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
// Issue popup with info about how to edit trace mode
// https://kmagiera.github.io/react-native-gesture-handler/docs/handler-tap.html#minpointers
// TODO convert to functional compoment
type Props = {};
const ImageOverlayButtons = (props) => {
  const { setStateByObject, showingSelectMode } = props;
  const resetState = { showingSelectMode: false, showingEditMode: false, showingScaleMode: true };

  const onClickEditMode = () => {
    setStateByObject({ ...resetState, showingEditMode: true });
  };

  const onClickClose = () => {
    setStateByObject(resetState);
  };

  const onClickReset = () => {
    setStateByObject({
      saturationValue: 1,
      contrastValue: 1,
      brightnessValue: 1,
    });
  };

  const onClickScale = () => {
    setStateByObject({ ...resetState, showingScaleMode: true });
  };
  // const onClickRotate= () => {
  //   setStateByObject({ showingSelectMode: false, showingEditMode: true });
  // };
  // const onClickMirror = () => {
  //   setStateByObject({ showingSelectMode: false, showingEditMode: true });
  // };
  // TODO change container styles to style
  const firstIcon = showingSelectMode ? 'image' : 'rotate-left';
  const secondIcon = showingSelectMode ? 'zoom-out-map' : 'flip';

  return (
    <Container styles={[{ position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: 'red' }, theme.noFlex]}>
      <Container styles={[{ position: 'absolute', top: 20, left: 10, padding: 10, backgroundColor: colors.slateTransparent, borderWith: 5, borderColor: colors.offWhite, borderRadius: 10 }, theme.noFlex]}>
        <TouchableOpacity onPress={onClickEditMode}>
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
        <TouchableOpacity onPress={onClickReset}>
          <MaterialIcon
            name="settings-backup-restore"
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
      <Container styles={[{ position: 'absolute', top: 20, right: 20, padding: 10, backgroundColor: colors.slateTransparent, borderWith: 5, borderColor: colors.offWhite, borderRadius: 10 }, theme.noFlex]}>
        <TouchableOpacity onPress={onClickClose}>
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
        </TouchableOpacity>
      </Container>
    </Container>
  );
};

ImageOverlayButtons.propTypes = {
  setStateByObject: PropTypes.func,
  showingSelectMode: PropTypes.bool,
};

export default ImageOverlayButtons;
