import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 0.5, flexDirection: 'row',
  },
  logo: {
    fontSize: 20,
    width: '80%',
    backgroundColor: 'yellow',
    textAlign: 'center',
    paddingTop: (Platform.OS === 'ios') ? 40 : 20,
  },
  menu: {
    fontSize: 20,
    width: '20%',
    backgroundColor: 'skyblue',
    textAlign: 'center',
    paddingTop: (Platform.OS === 'ios') ? 40 : 20,
  },
});
