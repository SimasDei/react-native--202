import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
  },
});

export default createAppContainer(AppNavigator);
