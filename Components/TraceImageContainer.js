import React from 'react';
import { Animated, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import LongPressableArea from './LongPressableArea';
import ScalableArea from './ScalableArea';

const TraceImageContainer = (props) => {
  const { children, onLongPress, tappable, scalable } = props;

  if (tappable) {
    return <LongPressableArea onLongPress={onLongPress}>{children}</LongPressableArea>;
  } else if (scalable) {
    return <ScalableArea>{children}</ScalableArea>;
  } else {
    return <View>{ children }</View>;
  }
};


export default TraceImageContainer;
