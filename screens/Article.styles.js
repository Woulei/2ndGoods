import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 80,
  },
  text: {
    color: '#646565',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#c2d44e',
    borderColor: '#c2d44e',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  title: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  sliderContainer: {
    marginBottom: 15,
  },
});
