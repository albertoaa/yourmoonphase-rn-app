import React, { Component } from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

const styles = require('./SignupStyles');

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Username',
      password: 'Password'
    };
  }

  signinUser(username, password) {
    console.log(username + " - " + password);
  }

  render() {
    return (
      <View style = {styles.signup_container}>
        <Image source={require('../../assets/img/logo-white-bg.png')} style = {styles.signup_logo}/>
        <TextInput
          style = {styles.signup_input}
          onChangeText = {(username) => this.setState({username})}
          value = {this.state.username}
          autoCapitalize = "none"
          onFocus = { () => this.setState({username: ""})}
        />
        <TextInput
          style = {styles.signup_input}
          onChangeText = {(password) => this.setState({password})}
          value = {this.state.password}
          autoCapitalize = "none"
          onFocus = { () => this.setState({password: ""})}
        />
        <TouchableOpacity onPress={this.signinUser()} style={styles.signup_button}>
          <Text style={styles.signup_text}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.signinUser()}>
          <Text style={styles.signup_button}>
            SIGNUP
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}