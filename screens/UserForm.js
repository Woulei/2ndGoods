import React, { Component } from 'react';
import { View, Text, TouchableHighlight, KeyboardAvoidingView } from 'react-native';

import styles from './UserForm.styles';
import t from 'tcomb-form-native';
import User, { formOptions } from '../model/User';

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { form } = this.refs;
    const newUser = form.getValue();
    if (!newUser) return;
    console.log(newUser);
  }

  render() {
    const Form = t.form.Form;

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.container}
        >
          <Form ref="form" type={User} options={formOptions} />
          <TouchableHighlight style={styles.button} onPress={this.onSubmit} underlayColor='#99d9f4' >
            <Text style={styles.buttonText}>Next step</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
