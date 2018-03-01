import React, { Component } from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';

const styles = require('./SignupStyles');

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Enter your username..',
      email: 'Enter your email',
      password: 'Enter your password...',
      phone_number: 'Enter your phone number',
      authCode: ''
    };
  }

  signupUser(username, email, password, phone_number) {
    Auth.signup({
      username: username,
      password: password,
      attributes: {
        phone_number: phone_number,
        email: email
      }
    })
      .then(res => {
        console.log('successful signup: ', res);
      })
      .catch(err => {
        console.log('error signing up: ', err);
      })
  }

  confirmUser() {
    const { authCode } = this.state.authCode;
    Auth.confirmSignUp(this.state.username, authCode)
      .then(res => {
        console.log('succesful confirmation: ', res);
      })
      .catch(err => {
        console.log('error confirming user: ', err);
      })
  }

  gotoSignin(){
    console.log("navigation to signin")
  }

  render() {
    return (
      <View style = {styles.signup_container}>
        <Image source={require('../../assets/img/logo-white-bg.png')} style = {styles.login_logo}/>
        <Text>Username:</Text>
        <TextInput
          style={styles.signup_input}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <Text>Email:</Text>
        <TextInput
          style={styles.signup_input}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Text>Password:</Text>
        <TextInput
          style={styles.signup_input}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Text>Phone Number:</Text>
        <TextInput
          style={styles.signup_input}
          onChangeText={(phone_number) => this.setState({phone_number})}
          value={this.state.phone_number}
        />
        <Button
          onPress={this.gotoSignin()}
          title="LOGIN"
          style = {styles.signup_button}
          accessibilityLabel="Login with your username and password"
        />
        <Button
          onPress={this.signupUser(this.state.username, this.state.email, this.state.password, this.state.phone_number)}
          title="SIGNUP"
          style = {styles.signup_button}
          accessibilityLabel="Signup with your info to get a new user account"
        />
      </View>
    );
  }
}