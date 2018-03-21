import React, { Component } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View } from 'react-native';
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
      password: 'Password',
      email: 'Email',
      errorMessage: ''
    };
    this.signupUser = this.signupUser.bind(this);
  }

  signupUser = () => {
    Auth.signUp({
      username: this.state.email,
      password: this.state.password,
      attributes: {
        email: this.state.email
      }
    })
      .then(data => { this.props.navigation.navigate('Confirmation', data) })
      .catch(err => { this.setState({ errorMessage: err.message }) });
  }

  render() {
    return (
        <KeyboardAvoidingView behavior = "padding"
                              style = {styles.signup_container}>
          <ScrollView contentContainerStyle={styles.signup_container}
                      keyboardShouldPersistTaps='never'>
            <View style={styles.signup_banner_container}>
              <Image source={require('../../assets/img/signup_banner.png')}
                     style = {styles.signup_banner}/>
            </View>
            <View style={styles.signup_form_container}>
              <Text style={styles.signup_banner_text}>
                SIGN UP
              </Text>
              <Text>
                {this.state.errorMessage}
              </Text>
              <TextInput
                style = {styles.signup_input}
                onChangeText = {(email) => this.setState({email})}
                placeholder = "EMAIL ADDRESS"
                autoCapitalize = "none"
                onFocus = { () => this.setState({email: ""})}
                keyboardType = "email-address"
                underlineColorAndroid = "#fff"/>
              <TextInput
                style = {styles.signup_input}
                onChangeText = {(password) => this.setState({password})}
                placeholder = "PASSWORD"
                autoCapitalize = "none"
                onFocus = { () => this.setState({password: ""})}
                secureTextEntry = { true }
                underlineColorAndroid = "#fff"/>
            </View>
            <View style={styles.signup_actions_container}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.login_button}>
                  LOGIN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.signupUser}
                                style={styles.signup_button}>
                <Text style={styles.signup_text}>
                  SIGNUP
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
    );
  }
}
