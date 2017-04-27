import React, { Component } from 'react';
import {
  SwitchIOS,
  View,
  Text
} from 'react-native';

import styles from '../styles';
import Button from './Button';

export default class ControlPanel extends Component {
  render() {
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.controlPanelWelcome}>
          {'2ndGoods'}
        </Text>
        <Button
          onPress={() => {
            this.props.closeDrawer();
          }}
          text="FAQ"
        />
      </View>
    )
  }
}
