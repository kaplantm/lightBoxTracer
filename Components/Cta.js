import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import theme from '../utils/theme';

const Cta = ({ text, action, style = {} }) => {
  const ctaButtonStyle = style.ctaButton || theme.ctaButton;
  const buttonTextStyle = style.ctaButtonText || theme.ctaButtonText;

  return (
    <TouchableOpacity style={ctaButtonStyle} onPress={action}>
      <Text style={buttonTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

Cta.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

export default Cta;
