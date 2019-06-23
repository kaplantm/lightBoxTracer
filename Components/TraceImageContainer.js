import React from 'react';
import { Animated, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import LongPressableArea from './LongPressableArea';
import ScalableArea from './ScalableArea';
import Container from './Container';

const TraceImageContainer = (props) => {
  const { children, onLongPress, tappable, scalable } = props;
  const onLongPressAction = tappable ? onLongPress : null;
  return (
    <ScalableArea scalable={scalable}>
      <LongPressableArea onLongPress={onLongPressAction}>
        {children}
      </LongPressableArea>
    </ScalableArea>
  );
};


export default TraceImageContainer;
