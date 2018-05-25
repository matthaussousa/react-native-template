import { createStackNavigator } from "react-navigation";

import { Home, Template } from "../containers";

export default createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Template: {
      screen: Template
    }
  },
  {
    initialRouteName: "Home"
  }
);
