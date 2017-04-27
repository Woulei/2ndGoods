import React, { Component } from 'react';
import {
  SwitchIOS,
  View,
  Text
} from 'react-native';

import Button from './Button';

export default class ControlPanel extends Component {
  render() {
    return (
      <View>
        <Button
          text="Close Drawer"
        />
      </View>
    )
  }
}
