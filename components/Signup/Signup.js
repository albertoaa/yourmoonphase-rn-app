import React, { Component } from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

const styles = require('./SignupStyles');

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Username',
      password: 'Password',
      email: 'Email',
      phone: 'Phone number'
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
        <TextInput
          style = {styles.signup_input}
          onChangeText = {(email) => this.setState({email})}
          value = {this.state.email}
          autoCapitalize = "none"
          onFocus = { () => this.setState({email: ""})}
        />
        <TextInput
          style = {styles.signup_input}
          onChangeText = {(phone) => this.setState({phone})}
          value = {this.state.phone}
          autoCapitalize = "none"
          onFocus = { () => this.setState({phone: ""})}
        />
        <TouchableOpacity onPress={this.signinUser()} style={styles.signup_button}>
          <Text style={styles.signup_text}>
            SIGNUP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.login_button}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}