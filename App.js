import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SwitchNavigator } from 'react-navigation';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Profile from './components/Profile/Profile';
import Confirmation from "./components/Confirmation/Confirmation";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import RegisterMoon from "./components/RegisterMoon/RegisterMoon";

const MainNavigator = SwitchNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
  Profile: { screen: Profile },
  RegisterMoon: { screen: RegisterMoon },
  Confirmation: { screen: Confirmation },
  ForgotPassword: { screen: ForgotPassword },
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
