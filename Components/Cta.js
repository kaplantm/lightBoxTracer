import React from 'react';
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

export default Cta;
