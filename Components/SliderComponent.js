import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import Slider from '@react-native-community/slider';
import theme from '../utils/theme';
import Container from './Container';

const SliderComponent = (props) => {
  const { label } = props;
  return (
    <Container styles={[theme.padded, theme.noFlex]}>
      {label && <Text>{label}</Text>}
      <Slider {...props} />
    </Container>

  );
};

SliderComponent.propTypes = {
  label: PropTypes.string,
};


export default SliderComponent;
