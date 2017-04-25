import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './UserForm.styles';

export default class UserForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{"Gender Bool"}</Text>
        <Text style={styles.title}>{"First Name"}</Text>
        <Text style={styles.title}>Last Name</Text>
        <Text style={styles.title}>Street Housenumber</Text>
        <Text style={styles.title}>Postcode</Text>
        <Text style={styles.title}>City</Text>
        <Text style={styles.title}>Telephone</Text>
        <Text style={styles.title}>Email</Text>
      </View>
    );
  }
}
