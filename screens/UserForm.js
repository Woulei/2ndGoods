import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './UserForm.styles';
import t from 'tcomb-form-native';
import User, { formOptions } from '../model/User';

export default class UserForm extends Component {
  render() {
    const Form = t.form.Form;
    
    return (
      <View style={styles.container}>
        <Form ref="form"
          type={User}
          options={formOptions} />
      </View>
    );
  }
}
