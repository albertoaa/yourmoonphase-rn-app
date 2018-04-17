const React = require('react-native');
const { Dimensions, StyleSheet, Platform } = React;

module.exports = StyleSheet.create({
  profile_container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profile_banner_container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profile_banner: {
    width: Dimensions.get('window').width,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20
  },
  profile_text: {
    fontSize: 20,
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 10
  },
  profile_history_container: {
    width: Dimensions.get('window').width - 20,
    height: 220,
    position: 'absolute',
    top: 170,
    backgroundColor: 'rgba(192,192,192, 0.5)'
  },
  profile_history_top: {
    flex: 1,
    flexDirection: 'row',
  },
  profile_moon_clouds: {
    width: 140,
    height: 140,
    opacity: 1
  },
  profile_history_top_text_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
    marginTop: 20
  },
  profile_history_top_text: {
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'sans-serif',
    fontSize: 40,
    color: '#B8966A',
    letterSpacing: 2,
  },
  profile_history_middle_text_container: {
    flexDirection: 'row',
    padding: 0,
    marginTop: -20
  },
  profile_history_middle_text: {
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'sans-serif',
    fontSize: 20,
    letterSpacing: 1.5,
    paddingLeft: 30
  },
  profile_history_bottom_text: {
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'sans-serif',
    fontSize: 8,
    letterSpacing: 3
  },
  profile_history_bottom: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  profile_history_bottom_top_text: {
    color: 'rgba(128,128,128, 0.3)',
    fontSize: 14,
    fontWeight: 'bold',
  },
  profile_history_bottom_bottom_text: {
    color: 'rgba(128,128,128, 0.3)',
    fontSize: 44,
    fontWeight: 'bold',
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
  },
  profile_moon_description_container: {
    marginTop: 150,
    width: Dimensions.get('window').width - 20,
    backgroundColor: 'rgba(192,192,192, 0.2)'
  },
  profile_moon_description_capital: {
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'sans-serif',
    fontSize: 24
  },
  profile_moon_description_text: {
    margin: 20,
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'sans-serif',
    textAlign: 'justify',
    fontSize: 12
  }
});