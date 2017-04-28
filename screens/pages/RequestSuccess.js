import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import styles from './Page.styles';
import logo from '../../assets/images/logo_full.png'


export default class RequestSuccess extends Component {
  render() {
    return (
      <ScrollView style={styles.outerContainer} >
        <View style={styles.containerSuccess}>
          <Image source={logo} style={styles.logo}  />
          <Text style={styles.successText}>{'We hebben uw verzoek succesvol ontvangen.\nWe nemen zo snel mogelijk contact met U op.'}</Text>
        </View>
      </ScrollView>
    );
  }
}
