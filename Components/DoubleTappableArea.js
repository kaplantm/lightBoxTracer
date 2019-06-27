import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';

const DoubleTappableArea = (props) => {
  const { children, onPress } = props;
  console.log({ onPress });

  let lastPress = 0;

  const handleOnPress = () => {
    const delta = new Date().getTime() - lastPress;
    console.log('handleOnPress', delta, onPress);
    if (delta < 200 && onPress) {
      console.log('delta');
      onPress();
      lastPress = new Date().getTime();
    }

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

DoubleTappableArea.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
};

export default DoubleTappableArea;
