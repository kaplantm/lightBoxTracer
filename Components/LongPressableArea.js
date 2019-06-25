import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';

const LongPressableArea = (props) => {
  const { children, onLongPress } = props;

  return (

    <TouchableWithoutFeedback onLongPress={onLongPress} delayLongPress={3000}>
      <View>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

LongPressableArea.propTypes = {
  onLongPress: PropTypes.func,
  children: PropTypes.node,
};


export default LongPressableArea;
