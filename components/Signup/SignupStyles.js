const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
  signup_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup_logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  signup_input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    color: 'gray',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 20
  },
  signup_button: {
    backgroundColor: '#000',
    color: '#fff'
  }
});