import React from 'react';
import { Animated, StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import Container from './Container';

const ScalableArea = (props) => {
  const { children } = props;

  // console.log(' pan render', this.touchX);
  return (
    <ScrollView
      maximumZoomScale={2.5}
      minimumZoomScale={1.0}
      pinchGestureEnabled
    >
      <Container>
        {children}
      </Container>
    </ScrollView>
  );
};


export default ScalableArea;
