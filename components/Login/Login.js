import React, { Component } from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';

const styles = require('./LoginStyles');

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Enter your username..',
      password: 'Enter your password...'
    };
  }

  signinUser(username, password) {
    console.log(username + " - " + password);
  }

  render() {
    return (
      <View style = {styles.login_container}>
        <Image source={require('../../assets/img/logo-white-bg.png')} style = {styles.login_logo}/>
        <Text>Username:</Text>
        <TextInput
          style={styles.login_input}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <Text>Password:</Text>
        <TextInput
          style={styles.login_input}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button
          onPress={this.signinUser(this.state.username, this.state.password)}
          title="LOGIN"
          style = {styles.login_button}
          accessibilityLabel="Login with your username and password"
        />
      </View>
    );
  }
}