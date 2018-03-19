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


const styles = require('./ConfirmationStyles');

export default class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.navigation.state.params.user.username,
      confirmation_code: '',
      errorMessage: ''
    };
    this.confirmUser = this.confirmUser.bind(this);
  }

  confirmUser = () => {
    Auth.confirmSignUp(this.state.username, this.state.confirmation_code)
      .then(() => { this.props.navigation.navigate('Login')} )
      .catch(err => { this.setState({ errorMessage: err.message }) });
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior = "padding"
        style = {styles.fullSize}
      >
        <ScrollView contentContainerStyle = {styles.confirmation_container}
                    keyboardShouldPersistTaps='never'
                    scrollEnabled={false}
        >
          <View style={styles.confirmation_banner_container}>
            <Image source={require('../../assets/img/forgot_password_banner.png')}
                   style = {styles.confirmation_banner}
            />
            <Text style={styles.confirmation_text}>
              VERIFY EMAIL
            </Text>
            <Text style={styles.confirmation_help_text}>
              PLEASE CHECK YOUR EMAIL AND ENTER THE 6-DIGIT {"\n"}
              VERIFCATION CODE IN THE SPACE BELOW
            </Text>
          </View>
          <View style={styles.confirmation_code_container}>
            <Text>
              {this.state.errorMessage}
            </Text>
            <TextInput
              style = {styles.confirmation_input}
              onChangeText = {(username) => this.setState({username})}
              value = {this.props.navigation.state.params.user.username}
              placeholder = "Username"
              autoCapitalize = "none"
            />
            <TextInput
              style = {styles.confirmation_input}
              onChangeText = {(confirmation_code) => this.setState({confirmation_code})}
              placeholder = "CONFIRMATION CODE"
              autoCapitalize = "none"
              onFocus = { () => this.setState({confirmation_code: ""})}
              keyboardType = "numeric"
              underlineColorAndroid = "#fff"/>
          </View>
          <View style={styles.confirmation_actions_container}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.login_button}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.confirmUser}
              style={styles.confirmation_button}
            >
              <Text style={styles.confirmation_text}>
                CONFIRM
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}