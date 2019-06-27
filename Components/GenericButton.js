import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import theme from '../utils/theme';
import colors from '../utils/colors';

const GenericButton = (props) => {
  const { onPress, icon, size, style, color, alignEnd, text, children } = props;
  const additionalStyle = alignEnd ? { marginLeft: 'auto' } : { marginRight: 20 };

  let innerElement;
  if (children) {
    innerElement = children;
  } else if (icon) {
    innerElement = (
      <MaterialIcon
        name={icon}
        size={size}
        color={color}
        style={style}
      />
    );
  } else {
    innerElement = (
      <Text style={[theme.headerText, theme.lightText, theme.imageOverlayButton]}>
        {text}

      </Text>
    );
  }

  return (
    <View style={[theme.alignCenter, additionalStyle, theme.justifyCenter]}>
      <TouchableOpacity onPress={onPress}>
        {innerElement}
      </TouchableOpacity>
    </View>
  );
};

GenericButton.defaultProps = {
  size: 50,
  style: theme.imageOverlayButton,
  color: colors.white,
};

GenericButton.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  alignEnd: PropTypes.bool,
  children: PropTypes.node,
  text: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

export default GenericButton;
