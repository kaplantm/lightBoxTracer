import React from 'react';
import { View } from 'react-native';
import theme from '../utils/theme';

const Container = (props) => {
  const { styles = [] } = props;
  return (
    <View {...props} style={[theme.flex, ...styles]} />
  );
};

Container.propTypes = {
  ...View.propTypes,
};


export default Container;
