import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import styles, { flex } from './theme';

const withSafeArea = (Element, options = {}) => {
  const style = options.style || styles.safeArea;
  return class extends Component {
    render() {
      console.log(this.props);
      return (
        <SafeAreaView style={{ flex: 1, ...style }}>
          <Element {...this.props} />
        </SafeAreaView>
      );
    }
  };
};

export default withSafeArea;
