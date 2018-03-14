import React, { Component } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import awsConfig from '../../src/aws-exports'

Amplify.configure({Auth: awsConfig});


const styles = require('./LoginStyles');

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    };
    this.signInUser = this.signInUser.bind(this);
  }

  signInUser = () => {
     Auth.signIn (this.state.username, this.state.password)
        .then(user => {this.props.navigation.navigate('Profile', user)})
        .catch(err => { this.setState({ errorMessage: err.message }) });
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior = "padding"
        style = {styles.fullSize}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}
                                  accessible={false} style={styles.fullSize}>
          <View style = {styles.login_container}>
            <Image source={require('../../assets/img/logo_login.png')}
                   style = {styles.login_logo}/>
            <Image source={require('../../assets/img/moon_clouds.png')}
                   style = {styles.login_moon}/>
            <Text style={styles.login_text}>
              LOGIN
            </Text>
            <TextInput style = {styles.login_input}
                       onChangeText = {(username) => this.setState({username})}
                       value = {this.state.username}
                       placeholder = "USER NAME"
                       autoCapitalize = "none"
                       onFocus = { () => this.setState({username: ""})}
                       underlineColorAndroid = "#fff"/>
            <TextInput style = {styles.login_input}
                       onChangeText = {(password) => this.setState({password})}
                       value = {this.state.password}
                       placeholder = "PASSWORD"
                       autoCapitalize = "none"
                       onFocus = { () => this.setState({password: ""})}
                       secureTextEntry = {true}
                       underlineColorAndroid = "#fff"/>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={styles.signup_button}>
                DON'T HAVE AN ACCOUNT?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={styles.signup_button}>
                FORGOT PASSWORD?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.signInUser} style={styles.login_button}>
              <Text style={styles.login_button_text}>
                DISCOVER
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