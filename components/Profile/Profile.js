import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View } from 'react-native';

import MyText from 'react-native-letter-spacing';
import Amplify, { Auth } from 'aws-amplify';
import awsConfig from '../../src/aws-exports'

Amplify.configure({Auth: awsConfig});

const styles = require('./ProfileStyles');

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // username: '',
      // password: '',
      errorMessage: ''
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
      <ScrollView contentContainerStyle = {styles.profile_container}>
        <View style={styles.profile_banner_container}>
          <Image
            source={require('../../assets/img/lunar_profile_banner.png')}
            style = {styles.profile_banner}
          />
          <Text style={styles.profile_text}>
            PROFILE
          </Text>
        </View>
        <View style={styles.profile_history_container}>
          <View style={styles.profile_history_top}>
            <View>
              <Image
                source={require('../../assets/img/moon_clouds.png')}
                style = {styles.profile_moon_clouds}
              />
            </View>
            <View style={styles.profile_history_top_text_container}>
              <Text style={styles.profile_history_top_text}>
                Full Moon
              </Text>
              <Text style={styles.profile_history_middle_text_container}>
                <Text style={styles.profile_history_top_text}>
                  -
                </Text>
                <Text style={styles.profile_history_middle_text}>
                  the contradiction
                </Text>
              </Text>
              <Text style={styles.profile_history_bottom_text}>
                Idealism. Duality. Fulfillment
              </Text>
            </View>
          </View>
          <View style={styles.profile_history_bottom}>
            <MyText
              letterSpacing={20}
              style={styles.profile_history_bottom_top_text}
            >
              DISCOVER
            </MyText>
            <MyText
              letterSpacing={2}
              wordSpacing={16}
              style={styles.profile_history_bottom_bottom_text}
            >
              YOUR HISTORY
            </MyText>
          </View>
          <View>

          </View>
        </View>
        <Text style={styles.profile_welcomeMessage}>
          Welcome {this.props.navigation.state.params.user.username}
        </Text>
        <TouchableOpacity onPress={this.signOutUser} style={styles.signout_button}>
          <Text style={styles.signout_text}>
            SIGN OUT
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}