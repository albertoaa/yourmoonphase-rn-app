const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
  login_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  login_input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    color: 'gray',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 20
  },
  login_button: {
    backgroundColor: '#000',
    color: '#fff'
  }
});