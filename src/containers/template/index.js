import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Template extends Component {

    static navigationOptions = {
        title: 'Template'
      };


  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Olar</Text>
      </View>
    );
  }
}

