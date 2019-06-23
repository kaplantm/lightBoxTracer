import React from 'react';
import { Animated, StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

const LongPressableArea = (props) => {
  const { children, onLongPress } = props;

  // TouchableWithoutFeedback here doesn't work without view as a child due to bug on iOS
  // https://github.com/facebook/react-native/issues/23740
  return (
    <TouchableWithoutFeedback onPress={onLongPress}>
      <View>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};


export default LongPressableArea;
