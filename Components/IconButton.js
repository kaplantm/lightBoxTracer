import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import theme from '../utils/theme';
import colors from '../utils/colors';

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
