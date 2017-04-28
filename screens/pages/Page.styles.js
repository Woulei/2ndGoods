import { Platform, StyleSheet } from 'react-native';


// standaard wit en deze groen: #c2d44e
// voor accenten grijs: #646565.


export default StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:20,
    paddingHorizontal: 10,
    paddingTop: 80,
  },
  captionBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingBottom: 20,
  },
  headerLeft: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  subheader: {
    height: 36,
    backgroundColor: '#c2d44e',
    borderColor: '#c2d44e',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'left',
    marginBottom: 15,
  },
  textUnderline: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'left',
    marginBottom: 15,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
  },
  textItalic: {
    fontSize: 18,
    fontStyle: 'italic',
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'left',
    marginBottom: 15,
  },
  caption: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333333',
    flex:1

  },
  captionIcon: {
    textAlign: 'center',
    color: '#c2d44e',
    flex:1

  },
});
