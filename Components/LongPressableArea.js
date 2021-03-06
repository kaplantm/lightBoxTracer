import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';

const LongPressableArea = (props) => {
  const { children, onPress } = props;

  return (

    <TouchableWithoutFeedback onLongPress={onPress} delayLongPress={3000}>
      <View>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

LongPressableArea.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
};


export default LongPressableArea;
