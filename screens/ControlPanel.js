import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux'

import {
  SwitchIOS,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';


import styles from '../styles';


export default class ControlPanel extends Component {
  render() {
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.controlPanelWelcome}>
          {'2ndGoods'}
        </Text>
        <TouchableHighlight style={styles.buttonControlPanel} underlayColor="#B5B5B5" onPress={() => {
            Actions.Article()
            this.props.closeDrawer()
          }}>
          <Text>{'Bied product aan'}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonControlPanel} underlayColor="#B5B5B5" onPress={() => {
            Actions.Faq()
            this.props.closeDrawer()
          }}>
          <Text>{'FAQ'}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonControlPanel} underlayColor="#B5B5B5" onPress={() => {
            Actions.HowDoesItWork()
            this.props.closeDrawer()
          }}>
          <Text>{'Hoe werkt het?'}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonControlPanel} underlayColor="#B5B5B5" onPress={() => {
            Actions.Commission()
            this.props.closeDrawer()
          }}>
          <Text>{'Commissie'}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonControlPanel} underlayColor="#B5B5B5" onPress={() => {
            Actions.Transportation()
            this.props.closeDrawer()
          }}>
          <Text>{'Transport & Opslag'}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonControlPanel} underlayColor="#B5B5B5" onPress={() => {
            Actions.Consignment()
            this.props.closeDrawer()
          }}>
          <Text>{'Consignatie'}</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonControlPanel} underlayColor="#B5B5B5" onPress={() => {
            Actions.Contact()
            this.props.closeDrawer()
          }}>
          <Text>{'Contact'}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
