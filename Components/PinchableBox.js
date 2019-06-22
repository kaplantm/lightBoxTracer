import React from 'react';
import { Animated, StyleSheet, Text, View, Image } from 'react-native';
import {
  PanGestureHandler,
  PinchGestureHandler,
  RotationGestureHandler,
  State,
} from 'react-native-gesture-handler';

import { USE_NATIVE_DRIVER } from '../config';
import TraceImage from './TraceImage';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    overflow: 'hidden',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  pinchableImage: {
    width: 250,
    height: 250,
  },
  wrapper: {
    flex: 1,
  },
});


export class PinchableBox extends React.Component {
  panRef = React.createRef();

  rotationRef = React.createRef();

  pinchRef = React.createRef();

  constructor(props) {
    super(props);

    /* Pinching */
    this.baseScale = new Animated.Value(1);
    this.pinchScale = new Animated.Value(1);
    this.scale = Animated.multiply(this.baseScale, this.pinchScale);
    this.lastScale = 1;
    this.onPinchGestureEvent = Animated.event(
      [{ nativeEvent: { scale: this.pinchScale } }],
      { useNativeDriver: USE_NATIVE_DRIVER },
    );

    /* Rotation */
    this.rotate = new Animated.Value(0);
    this.rotateStr = this.rotate.interpolate({
      inputRange: [-100, 100],
      outputRange: ['-100rad', '100rad'],
    });
    this.lastRotate = 0;
    this.onRotateGestureEvent = Animated.event(
      [{ nativeEvent: { rotation: this.rotate } }],
      { useNativeDriver: USE_NATIVE_DRIVER },
    );

    /* Tilt */
    this.tilt = new Animated.Value(0);
    this.tiltStr = this.tilt.interpolate({
      inputRange: [-501, -500, 0, 1],
      outputRange: ['1rad', '1rad', '0rad', '0rad'],
    });
    this.lastTilt = 0;
    this.onTiltGestureEvent = Animated.event(
      [{ nativeEvent: { translationY: this.tilt } }],
      { useNativeDriver: USE_NATIVE_DRIVER },
    );
  }

  _onRotateHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this.lastRotate += event.nativeEvent.rotation;
      this.rotate.setOffset(this.lastRotate);
      this.rotate.setValue(0);
    }
  };

  _onPinchHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this.lastScale *= event.nativeEvent.scale;
      this.baseScale.setValue(this.lastScale);
      this.pinchScale.setValue(1);
    }
  };

  _onTiltGestureStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this.lastTilt += event.nativeEvent.translationY;
      this.tilt.setOffset(this.lastTilt);
      this.tilt.setValue(0);
    }
  };

  render() {
    const { children } = this.props;

    return (
      <PinchGestureHandler
        ref={this.pinchRef}
        simultaneousHandlers={this.rotationRef}
        onGestureEvent={this.onPinchGestureEvent}
        onHandlerStateChange={this.onPinchHandlerStateChange}
      >
        <Animated.View
          style={[styles.container, { transform: [
            { scale: this.scale },
          ] },
          ]}
          collapsable={false}
        >
          {children}
        </Animated.View>
      </PinchGestureHandler>
    );
  }
}


export default PinchableBox;
