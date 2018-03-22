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
      username: '',
      resetCode: '',
      newPassword: '',
      errorMessage: '',
      resetPassword: false,
      recoverButtonText: 'RECOVER'
    };
    this.resetPassword = this.resetPassword.bind(this);
  }

  resetPassword = () => {
    if(this.state.resetPassword === true) {
      Auth.forgotPasswordSubmit(this.state.username, this.state.resetCode, this.state.newPassword)
        .then(() => { this.props.navigation.navigate('Login')})
        .catch(err => {this.setState({ errorMessage: err.message }) });
    } else {
      Auth.forgotPassword(this.state.username)
        .then(() => {this.setState({ resetPassword: true }) })
        .catch(err => {this.setState({ errorMessage: err.message }) });
    }
  }

  renderIf = (condition, content) => {
    if (condition) {
      return content;
    } else {
      return null;
    }
  }

  resetPasswordFields = () => {
    return (
      <View>
        <TextInput
          style = {styles.forgot_password_input}
          onChangeText = {(resetCode) => this.setState({resetCode})}
          placeholder = "RESET CODE"
          autoCapitalize = "none"
          onFocus = { () => this.setState({resetCode: ""})}
          keyboardType = "numeric"
          underlineColorAndroid = "#fff"/>
        <TextInput
          style = {styles.forgot_password_input}
          onChangeText = {(newPassword) => this.setState({newPassword})}
          placeholder = "NEW PASSWORD"
          autoCapitalize = "none"
          onFocus = { () => {this.setState({newPassword: ""}); this.setState({recoverButtonText: 'RESET'})}}
          secureTextEntry = { true }
          underlineColorAndroid = "#fff"/>
        </View>
      )
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
            <Text>
              {this.state.errorMessage}
            </Text>
          </View>
          <View style={styles.forgot_password_form_container}>
            <TextInput style = {styles.forgot_password_input}
                       onChangeText = {(username) => this.setState({username})}
                       value = {this.state.username}
                       placeholder = "EMAIL ADDRESS"
                       autoCapitalize = "none"
                       keyboardType = "email-address"
                       onFocus = { () => this.setState({username: ""})}
                       underlineColorAndroid = "#fff"
            />
            {this.renderIf(this.state.resetPassword, this.resetPasswordFields())}
          </View>
          <View style={styles.forgot_password_actions_container}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.login_button}>
                GO BACK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.resetPassword}
                              style={styles.forgot_password_button}
            >
              <Text style={styles.forgot_password_text}>
                {this.state.recoverButtonText}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}