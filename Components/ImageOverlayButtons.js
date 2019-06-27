import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import theme from '../utils/theme';
import colors from '../utils/colors';
import GenericButton from './GenericButton';

const ImageOverlayButtons = (props) => {
  const { setStateByObject, setStateByFunction, pop } = props;

  const resetModesState = { showingSelectMode: false, showingEditMode: false, showingScaleMode: false };

  const onClickEdit = () => {
    setStateByObject({ ...resetModesState, showingEditMode: true });
  };

  const onClickClose = () => {
    setStateByObject(resetModesState);
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
  const onClickBack = () => {
    pop();
  };

  const backButton = {
    icon: 'arrow-back',
    onPress: onClickBack,
  };
  const closeButton = {
    icon: 'close',
    onPress: onClickClose,
  };
  const resetButton = {
    icon: 'layers-clear',
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
  const scaleText = {
    text: 'Scale',
  };


  const getButtonsDefinition = () => {
    const { showingSelectMode, showingScaleMode } = props;
    let buttons = [];

    if (showingSelectMode) {
      buttons = [backButton, editButton, scaleButton, closeButton];
    } else if (showingScaleMode) {
      buttons = [scaleText, closeButton];
    } else {
      buttons = [rotateButton, mirrorButton, resetButton, closeButton];
    }

    return buttons;
  };


  const { buttonsDefinition } = props;
  const buttonsArray = buttonsDefinition || getButtonsDefinition();

  const buttonSet = buttonsArray.map((button, index) => {
    const { icon, text } = button;
    const alignEnd = index === buttonsArray.length - 1;
    return <GenericButton {...button} key={icon || text} alignEnd={alignEnd} />;
  });

  return (
    <View style={[theme.absoluteFull, theme.padded, {
      backgroundColor: colors.slateTransparent,
      bottom: undefined,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }]}
    >
      {buttonSet}
    </View>
  );
};

ImageOverlayButtons.propTypes = {
  pop: PropTypes.func,
  setStateByFunction: PropTypes.func,
  setStateByObject: PropTypes.func,
  showingSelectMode: PropTypes.bool,
  showingScaleMode: PropTypes.bool,
  buttonsDefinition: PropTypes.arrayOf(PropTypes.object),

};

export default ImageOverlayButtons;
