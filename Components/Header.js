import React from 'react';
import { View, Text } from 'react-native';
import theme from '../utils/theme';

const Header = () => (
  <View style={theme.header}>
    <Text style={theme.headerText}>LIGHTBOX TRACER</Text>
  </View>
);

export default Header;
