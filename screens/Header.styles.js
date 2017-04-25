import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: (Platform.OS === 'ios') ? 0.1 : 0.1, flexDirection: 'row',
  },
  logo: {
    fontSize: 20,
    flex: 0.8,
    backgroundColor: 'yellow',
    textAlign: 'center',
    paddingTop: (Platform.OS === 'ios') ? 30 : 5,
  },
  menu: {
    fontSize: 20,
    flex: 0.2,
    backgroundColor: 'skyblue',
    textAlign: 'center',
    paddingTop: (Platform.OS === 'ios') ? 30 : 5,
  },
});
