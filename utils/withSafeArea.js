import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { flex } from "./styles";

const withSafeArea = (Element, options = {}) => {
    const {style} = options;
  return class extends Component {
    render() {
        console.log(this.props);
      return (
        <SafeAreaView style={{ flex: 1, ...style}}>
          <Element {...this.props} />
        </SafeAreaView>
      );
    }
  };
};

export default withSafeArea;
