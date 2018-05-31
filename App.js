import React, { Component } from "react";
import { YellowBox } from "react-native";
import { ThemeProvider } from "styled-components";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import { DefaultTheme } from "./src/themes/index";
import { MainStack } from "@routers";
import { Home } from "./src/containers";
import reducers from "./src/reducers";

const store = createStore(reducers, applyMiddleware(thunk));

YellowBox.ignoreWarnings(["Warning: isMounted(...) is deprecated"]);
export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={DefaultTheme}>
        <Provider store={store}>
          <MainStack />
        </Provider>
      </ThemeProvider>
    );
  }
}
