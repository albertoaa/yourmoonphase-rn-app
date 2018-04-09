import React, { Component } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View } from 'react-native';

import Amplify, { Auth } from 'aws-amplify';
import awsConfig from '../../src/aws-exports'

Amplify.configure({Auth: awsConfig});

const styles = require('./RegisterMoonStyles');

export default class RegisterMoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registration_code: '',
    };
    // this.signInUser = this.signOut.bind(this);
  }

  signOutUser = () => {
    Auth.signOut()
      .then( () => this.props.navigation.navigate('Login') )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <ImageBackground source={require('../../assets/img/register_moon.png')} style = {styles.register_moon_background_image}>
        <KeyboardAvoidingView
          behavior = "padding"
          style = {styles.fullSize}
        >
          <View style={styles.register_mooon_header_container}>
            <Text style={styles.register_moon_header}>
              MOON{'\n'}REGISTRATION
            </Text>
          </View>
          <View style={styles.register_moon_container}>
            <TextInput style = {styles.register_moon_input}
                       onChangeText = {(registration_code) => this.setState({registration_code})}
                       value = {this.state.registration_code}
                       keyboardType = "numeric"
                       placeholder = "ENTER HERE"
                       autoCapitalize = "none"
                       onFocus = { () => this.setState({registration_code: ""})}
                       underlineColorAndroid = "#fff"/>
          </View>
          <View style={styles.register_moon_actions_container}>
            <TouchableOpacity style={styles.register_moon_button}>
              <Text style={styles.register_moon_button_text}>
                REGISTER
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}