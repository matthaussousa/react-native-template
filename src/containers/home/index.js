import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { templateActions } from "../../actions"; //Import your actions

class Home extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>{this.props.data}</Text>
        <Button
          title="Set Com Delay"
          onPress={() => this.props.setDataDelay("Olar")}
        />
        <Button
          title="Go"
          onPress={() => this.props.navigation.navigate("Template")}
        />
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    data: state.templateReducer.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(templateActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
