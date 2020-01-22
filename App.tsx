import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import appStyles from './styles/App';

const App = () => {
  return (
    <View style={appStyles.container}>
      <Text>Ahoy sailor o/ ⛵</Text>
    </View>
  );
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      title: 'Home',
      headerStyle: appStyles.headerStyle,
      headerTitleStyle: appStyles.headerTitleStyle,
    },
  },
});

export default createAppContainer(AppNavigator);
