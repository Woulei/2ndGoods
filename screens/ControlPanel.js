import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux'

import {
  SwitchIOS,
  View,
  Text,
  Button,
} from 'react-native';

import styles from '../styles';

export default class ControlPanel extends Component {
  render() {
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.controlPanelWelcome}>
          {'2ndGoods'}
        </Text>
        <Button
        title="Press Me"
        onPress={Actions.faq}>'FAQ'</Button>
      </View>
    )
  }
}
