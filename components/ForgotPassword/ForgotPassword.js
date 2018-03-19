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

Amplify.configure({Auth: awsConfig});


const styles = require('./ForgotPasswordStyles');

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.resetPassword = this.resetPassword.bind(this);
  }

  resetPassword = () => {
    console.log(this.state.email);
  }

  render () {
    return (
      <KeyboardAvoidingView
        behavior = "padding"
        style = {styles.fullSize}
      >
        <ScrollView contentContainerStyle = {styles.forgot_password_container}
                    keyboardShouldPersistTaps='never'
                    scrollEnabled={false}
        >
          <View style={styles.forgot_password_banner_container}>
            <Image source={require('../../assets/img/forgot_password_banner.png')}
                   style = {styles.forgot_password_banner}
            />
            <Text style={styles.forgot_password_text}>
              FORGOT PASSWORD
            </Text>
            <Text style={styles.forgot_password_help_text}>
              PLEASE ENTER THE EMAIL ADDRESS WE HAVE ON {"\n"}
              FILE FOR YOUR MOON PHASE ACCOUNT
            </Text>
          </View>
          <View></View>
          <View></View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}