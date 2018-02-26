import React from 'react';
import { Text, View } from 'react-native';

const styles = require('./LoginStyles')

export default class Login extends React.Component {
  render() {
    return (
      <View id="login-container">
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}