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

const IconButton = (props) => {
  const { onPress, icon, size, style, color, alignEnd } = props;
  const additionalStyle = alignEnd ? { marginLeft: 'auto' } : { marginRight: 20 };
  return (
    <View style={[theme.alignCenter, additionalStyle]}>
      <TouchableOpacity onPress={onPress}>
        <MaterialIcon
          name={icon}
          size={size}
          color={color}
          style={style}
        />
      </TouchableOpacity>
    </View>
  );
};

IconButton.defaultProps = {
  icon: 'close',
  size: 50,
  style: theme.imageOverlayButton,
  color: colors.white,
};

IconButton.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  alignEnd: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

export default IconButton;
