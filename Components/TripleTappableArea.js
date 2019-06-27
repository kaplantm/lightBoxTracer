import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';

const TripleTappableArea = (props) => {
  const { children, onPress } = props;

  let penultimatePress = 0;
  let lastPress = 0;

  const handleOnPress = () => {
    const deltaLast = new Date().getTime() - lastPress;
    const deltaPenultimate = new Date().getTime() - penultimatePress;

    if (deltaLast < 200 && deltaPenultimate < 400 && onPress) {
      onPress();
      lastPress = new Date().getTime();
    }

    penultimatePress = lastPress;
    lastPress = new Date().getTime();
  };

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

TripleTappableArea.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
};

export default TripleTappableArea;
