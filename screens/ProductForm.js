import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './ProductForm.styles';

export default class RequestForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{"Product Form"}</Text>
      </View>
    );
  }
}
