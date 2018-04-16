import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View } from 'react-native';

import Amplify, { Auth } from 'aws-amplify';
import awsConfig from '../../src/aws-exports'

Amplify.configure({Auth: awsConfig});

const styles = require('./ProfileStyles');

export default class Profile extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   username: '',
    //   password: '',
    //   errorMessage: ''
    // };
    // this.signInUser = this.signOut.bind(this);
  }

  signOutUser = () => {
    Auth.signOut()
      .then( () => this.props.navigation.navigate('Login') )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <View style = {styles.profile_container}>
        <Image source={require('../../assets/img/logo_login.png')} style = {styles.profile_logo}/>
        <Text style={styles.profile_welcomeMessage}>
          Welcome {this.props.navigation.state.params.user.username}
        </Text>
        <TouchableOpacity onPress={this.signOutUser} style={styles.signout_button}>
          <Text style={styles.signout_text}>
            SIGN OUT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}