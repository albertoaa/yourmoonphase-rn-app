const React = require('react-native');
const { Dimensions, StyleSheet } = React;

module.exports = StyleSheet.create({
  fullSize: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  register_moon_background_image: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  register_mooon_header_container: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 80,
    marginRight: 40
  },
  register_moon_container: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 50,
    marginRight: 50,
    flex: 1
  },
  register_moon_actions_container: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  register_moon_header: {
    textAlign: 'left',
    fontSize: 26,
    fontWeight: 'bold',
  },
  register_moon_input: {
    width: 160,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 20,
    textAlign: 'left',
    fontSize: 10
  },
  register_moon_button: {
    backgroundColor: '#C4DE9F',
    width: Dimensions.get('window').width,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  register_moon_button_text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 10
  },

});