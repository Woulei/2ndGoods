import { StyleSheet, PixelRatio } from 'react-native';
const deviceScreen = require('Dimensions').get('window')

module.exports = StyleSheet.create({
  button: {
    width:250,
    backgroundColor: 'white',
    padding: 15,

    alignSelf: 'center',
  },
});
