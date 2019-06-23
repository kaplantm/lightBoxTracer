import React from 'react';
import { Animated, StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import Container from './Container';

const ScalableArea = (props) => {
  const { children, scalable } = props;

  return (
    <ScrollView
      scrollEnabled={scalable}
      pinchGestureEnabled={scalable}
      maximumZoomScale={2.5}
      minimumZoomScale={1.0}
    >
      <Container>
        {children}
      </Container>
    </ScrollView>
  );
};


export default ScalableArea;
