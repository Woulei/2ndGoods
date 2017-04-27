import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import styles from './Page.styles';


export default class PageOfferProduct extends Component {
  render() {
    return (
      <ScrollView
      style={styles.outerContainer}
      >
      <View
      style={styles.container}>
        <Text>{'Bied product aan'}</Text>
        </View>
      </ScrollView>
    );
  }
}
