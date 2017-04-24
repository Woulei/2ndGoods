import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './SecondGoods.styles';
import TitleScreen from './screens/TitleScreen';
import Header from './screens/Header';

export default class SecondGoods extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}
