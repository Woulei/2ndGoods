import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import styles from './Button.styles';
export default class Button extends Component {



  render() {
    return(
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={() => {
          this.props.onPress();
        }}>
        <Text>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
}
