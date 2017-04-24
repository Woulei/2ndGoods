import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './TitleScreen.styles';

export default class TitleScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>2nd Goods</Text>
      </View>
    );
  }
}
