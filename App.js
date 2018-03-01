import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

import Amplify, { Auth } from 'aws-amplify';
import config from './components/aws-exports.js';
Amplify.configure(config);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
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
