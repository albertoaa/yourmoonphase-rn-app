import React, { Component } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
        .then(user => {console.log(user.username)})
        // .catch(err => console.log(err));
        .catch(err => { this.setState({ errorMessage: err.message }) });
  };

  render() {
    return (
      <View style = {styles.login_container}>
        <Image source={require('../../assets/img/logo-white-bg.png')} style = {styles.login_logo}/>
        <TextInput
          style = {styles.login_input}
          onChangeText = {(username) => this.setState({username})}
          value = {this.state.username}
          placeholder = "Username"
          autoCapitalize = "none"
          onFocus = { () => this.setState({username: ""})}
        />
        <TextInput
          style = {styles.login_input}
          onChangeText = {(password) => this.setState({password})}
          value = {this.state.password}
          placeholder = "Password"
          autoCapitalize = "none"
          onFocus = { () => this.setState({password: ""})}
          secureTextEntry = {true}
        />
        <TouchableOpacity onPress={this.signInUser} style={styles.login_button}>
          <Text style={styles.login_text}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Signup')}
        >
          <Text style={styles.signup_button}>
            SIGNUP
          </Text>
        </TouchableOpacity>
        <Text>
          {this.state.errorMessage}
        </Text>
      </View>
    );
  }
}