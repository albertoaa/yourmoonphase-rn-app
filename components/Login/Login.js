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
import awsConfig, { aws_api_base_url } from '../../src/aws-exports'

Amplify.configure({Auth: awsConfig});


const styles = require('./LoginStyles');

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    };
    this.signInUser = this.signInUser.bind(this);
  }

  signInUser = () => {
    let awsUser = null;
     Auth.signIn (this.state.email, this.state.password)
        .then(user => {
          const accessToken = user.signInUserSession.idToken.jwtToken;
          awsUser = user;
          fetch( aws_api_base_url + '/test/users/user/moons', {
            method: 'GET',
            headers: {
              'Authorization': accessToken,
              'Content-Type': 'application/json'
            },
          })
          .then(response => {
            data = JSON.parse(response._bodyText);
            if (data.status = 200) {
              data.userMoons.length == 0 ? this.props.navigation.navigate('RegisterMoon',  { user: awsUser }) : this.props.navigation.navigate('Profile', { user: awsUser });
            }
          })
          .catch(error => { this.setState({ errorMessage: error.message }) })
        })
        .catch(error => { this.setState({ errorMessage: error.message }) });
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior = "padding"
        style = {styles.fullSize}
      >
        <ScrollView contentContainerStyle = {styles.login_container}
                    keyboardShouldPersistTaps='never'
                    scrollEnabled={false}>
          <View style={styles.login_banner_container}>
            <Image source={require('../../assets/img/logo_login.png')}
                   style = {styles.login_logo}/>
            <Image source={require('../../assets/img/moon_clouds.png')}
                   style = {styles.login_moon}/>
            <Text style={styles.login_text}>
              LOGIN
            </Text>
          </View>
          <View style={styles.login_form_container}>
            <Text>
              {this.state.errorMessage}
            </Text>
            <TextInput style = {styles.login_input}
                       onChangeText = {(email) => this.setState({email})}
                       value = {this.state.email}
                       placeholder = "EMAIL ADDRESS"
                       autoCapitalize = "none"
                       onFocus = { () => this.setState({email: ""})}
                       underlineColorAndroid = "#fff"/>
            <TextInput style = {styles.login_input}
                       onChangeText = {(password) => this.setState({password})}
                       value = {this.state.password}
                       placeholder = "PASSWORD"
                       autoCapitalize = "none"
                       onFocus = { () => this.setState({password: ""})}
                       secureTextEntry = {true}
                       underlineColorAndroid = "#fff"/>
          </View>
          <View style={styles.login_actions_container}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={styles.signup_button}>
                DON'T HAVE AN ACCOUNT?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
              <Text style={styles.signup_button}>
                FORGOT PASSWORD?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.signInUser} style={styles.login_button}>
              <Text style={styles.login_button_text}>
                DISCOVER
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}