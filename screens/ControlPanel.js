import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux'

import {
  SwitchIOS,
  View,
  Text,
} from 'react-native';

import Button from './Button'

import styles from '../styles';


export default class ControlPanel extends Component {
  render() {
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.controlPanelWelcome}>
          {'2ndGoods'}
        </Text>
        <Button
        style={styles.button}
        text="Bied product aan"
        onPress={Actions.Article}>'Bied product aan'</Button>
        <Button
        style={styles.button}
        text="FAQ"
        onPress={Actions.Faq}>'FAQ'</Button>
        <Button
        style={styles.button}
        text="Hoe werkt het?"
        onPress={Actions.HowDoesItWork}>'Hoe werkt het?'</Button>
        <Button
        style={styles.button}
        text="Commissie"
        onPress={Actions.Commission}>'Commissie'</Button>
        <Button
        style={styles.button}
        text="Transport & Opslag"
        onPress={Actions.Transportation}>'Transport & Opslag'</Button>
        <Button
        style={styles.button}
        text="Consignatie"
        onPress={Actions.Consignment}>'Consignatie'</Button>
        <Button
        style={styles.button}
        text="Contact"
        onPress={Actions.Contact}>'Contact'</Button>

        <Button
          onPress={() => {
            this.props.closeDrawer();
          }}
          text="Sluit"
        />

      </View>
    )
  }
}
