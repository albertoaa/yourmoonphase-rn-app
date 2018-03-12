import React, { Component } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
      <View style = {styles.confirmation_container}>
        <Image source={require('../../assets/img/logo_login.png')} style = {styles.confirmation_logo}/>
        <TextInput
          style = {styles.confirmation_input}
          onChangeText = {(username) => this.setState({username})}
          value = {this.props.navigation.state.params.user.username}
          placeholder = "Username"
          autoCapitalize = "none"
        />
        <TextInput
          style = {styles.confirmation_input}
          onChangeText = {(code) => this.setState({confirmation_code: code})}
          value = {this.state.password}
          placeholder = "Code"
          autoCapitalize = "none"
          secureTextEntry = {true}
        />
        <TouchableOpacity onPress={this.confirmUser} style={styles.confirmation_button}>
          <Text style={styles.confirmation_text}>
            CONFIRM
          </Text>
        </TouchableOpacity>
        <Text>
          {this.state.errorMessage}
        </Text>
      </View>
    );
  }
}