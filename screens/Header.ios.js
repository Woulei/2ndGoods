import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './Header.styles';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.logo}>Gegevens</Text>
      </View>
    );
  }
}
