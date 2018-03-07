const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
  profile_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile_logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  signout_button: {
    backgroundColor: '#157DF8',
    width: 100,
    height: 40,
    alignItems:'center',
    paddingTop: 10,
    marginBottom: 20,
  },
  signout_text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900'
  },
  profile_welcomeMessage: {
    fontSize: 20,
    marginBottom: 50
  }
});