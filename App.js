import React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { SwitchNavigator } from 'react-navigation';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

const MainNavigator = SwitchNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
  initialRouteName: 'Login',
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
