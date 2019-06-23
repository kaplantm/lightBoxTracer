import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import theme from '../utils/theme';

const ScalableArea = (props) => {
  const { children, scalable } = props;

  return (
    <ScrollView
      style={theme.flex}
      contentContainerStyle={[{
        alignItems: 'center',
      }]}
      centerContent
      zoomScale={1}
      scrollEnabled={scalable}
      pinchGestureEnabled={scalable}
      maximumZoomScale={2.5}
      minimumZoomScale={1.0}
    >
      {children}
    </ScrollView>
  );
};

ScalableArea.propTypes = {
  scalable: PropTypes.bool,
  children: PropTypes.node,
};


export default ScalableArea;
