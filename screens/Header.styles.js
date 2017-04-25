import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'row',
  },
  logo: {
    fontSize: 20,
    height: (Platform.OS === 'ios') ? 70 : 50,
    width: '80%',
    backgroundColor: 'yellow',
    textAlign: 'center',
    paddingTop: (Platform.OS === 'ios') ? 40 : 20,
  },
  menu: {
    fontSize: 20,
    height: (Platform.OS === 'ios') ? 70 : 50,
    width: '20%',
    backgroundColor: 'skyblue',
    textAlign: 'center',
    paddingTop: (Platform.OS === 'ios') ? 40 : 20,
  },
});
