import React, { Component } from 'react';
import { Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import awsConfig from '../../src/aws-exports'

const styles = require('./SignupStyles');

Amplify.configure({
  Auth: awsConfig
});

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Username',
      password: 'Password',
      email: 'Email',
      phone: 'Phone number',
      errorMessage: ''
    };
    this.signupUser = this.signupUser.bind(this);
  }

  signupUser = () => {
    Auth.signUp({
      username: this.state.username,
      password: this.state.password,
      attributes: {
        email: this.state.email,
        phone_number: this.state.phone,
      },
    })
      .then(data => { this.props.navigation.navigate('Confirmation', data) })
      .catch(err => { this.setState({ errorMessage: err.message }) });
  }

  render() {
    return (
        <KeyboardAvoidingView
          behavior="padding"
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style = {styles.signup_container}>
              <Image source={require('../../assets/img/logo-white-bg.png')} style = {styles.signup_logo}/>
              <TextInput
                style = {styles.signup_input}
                onChangeText = {(username) => this.setState({username})}
                placeholder = "Username"
                autoCapitalize = "none"
                onFocus = { () => this.setState({username: ""})}
              />
              <TextInput
                style = {styles.signup_input}
                onChangeText = {(password) => this.setState({password})}
                placeholder = "Password"
                autoCapitalize = "none"
                onFocus = { () => this.setState({password: ""})}
                secureTextEntry = { true }
              />
              <TextInput
                style = {styles.signup_input}
                onChangeText = {(email) => this.setState({email})}
                placeholder = "Email address"
                autoCapitalize = "none"
                onFocus = { () => this.setState({email: ""})}
                keyboardType = "email-address"
              />
              <TextInput
                style = {styles.signup_input}
                onChangeText = {(phone) => this.setState({phone})}
                placeholder = "Phone number"
                autoCapitalize = "none"
                onFocus = { () => this.setState({phone: ""})}
                keyboardType = "phone-pad"
              />
              <TouchableOpacity
                onPress={this.signupUser}
                style={styles.signup_button}
              >
                <Text style={styles.signup_text}>
                  SIGNUP
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.login_button}>
                  LOGIN
                </Text>
              </TouchableOpacity>
              <Text>
                {this.state.errorMessage}
              </Text>
            </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
