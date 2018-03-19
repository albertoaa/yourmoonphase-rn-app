const React = require('react-native');
const { Dimensions, StyleSheet } = React;

module.exports = StyleSheet.create ({
  fullSize: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  forgot_password_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: -10,
  },
  forgot_password_banner: {
    width: Dimensions.get('window').width,
    height: 200,
    resizeMode: 'contain'
  },
  forgot_password_text: {
    fontSize: 20,
    marginBottom: 20,
    color: '#000',
    fontWeight: 'bold',
    letterSpacing: 10
  },
  forgot_password_help_text: {
    fontSize: 12,
    marginBottom: 30,
    color: 'lightgray',
  },
  forgot_password_banner_container: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});