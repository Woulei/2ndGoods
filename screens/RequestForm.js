import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './RequestForm.styles';
import UserForm from './UserForm';
import StorageForm from './StorageForm';

export default class RequestForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UserForm />
        <StorageForm />
      </View>
    );
  }
}
