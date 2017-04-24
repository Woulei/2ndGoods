import React, { Component } from 'react';
import { View } from 'react-native';

import TitleScreen from './screens/TitleScreen';
import styles from './SecondGoods.styles';

export default class SecondGoods extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TitleScreen />
      </View>
    );
  }
}
