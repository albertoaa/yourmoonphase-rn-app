const React = require('react-native');
const { Dimensions, StyleSheet } = React;

module.exports = StyleSheet.create({
  fullSize: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  login_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: -10,
  },
  login_banner_container: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  login_form_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  login_actions_container: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  login_logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: -40,
  },
  login_moon: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  login_text: {
    fontSize: 20,
    marginBottom: 50,
    color: '#000',
    fontWeight: 'bold',
    letterSpacing: 10
  },
  login_input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 20,
    textAlign: 'left',
    fontSize: 10
  },
  login_button: {
    backgroundColor: '#000',
    width: Dimensions.get('window').width,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_button_text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 10
  },
  signup_button: {
    backgroundColor: '#fff',
    color: "lightgrey",
    width: 200,
    margin: 10,
    height: 20,
    fontSize: 10,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
});