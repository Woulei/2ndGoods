import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './StorageForm.styles';

export default class StorageForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{"Storage Form"}</Text>
      </View>
    );
  }
}
