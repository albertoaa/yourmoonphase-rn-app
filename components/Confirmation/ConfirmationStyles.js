const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
  confirmation_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmation_logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  confirmation_input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    color: 'black',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 20,
    textAlign: 'center'
  },
  confirmation_button: {
    backgroundColor: '#157DF8',
    width: 100,
    height: 40,
    alignItems:'center',
    paddingTop: 10,
    marginBottom: 20,
  },
  confirmation_text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900'
  },
});