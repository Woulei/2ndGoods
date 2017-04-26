import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: (Platform.OS === 'ios') ? 0.1 : 0.1, flexDirection: 'row',
  },
  logo: {
    fontSize: 20,
    flex: 0.8,
    color: 'white',
    backgroundColor: '#646565',
    textAlign: 'center',
    paddingTop: (Platform.OS === 'ios') ? 25 : 15,
  },
});
