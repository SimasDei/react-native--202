import React from 'react';
import { Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import appStyles from './styles/App';
import navStyles from './styles/App';

import Post from './screens/Post';

const App = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('Post');
  };

  return (
    <View style={appStyles.container}>
      <Text>Ahoy sailor o/ ⛵</Text>
      <Button onPress={onPressHandler} title={'Go To Post'} />
    </View>
  );
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      title: 'Home',
      ...navStyles,
    },
  },
  Post: {
    screen: Post,
    navigationOptions: {
      title: 'Post',
      ...navStyles,
    },
  },
});

export default createAppContainer(AppNavigator);
