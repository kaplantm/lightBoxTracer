import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../utils/styles";

const Cta = ({ text, action, style = {} }) => {
const ctaButtonStyle = style.ctaButton || styles.ctaButton;
const buttonTextStyle = style.ctaButtonText || styles.ctaButtonText;

  return (
    <TouchableOpacity style={ctaButtonStyle} onPress={action}>
      <Text style={buttonTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Cta;
