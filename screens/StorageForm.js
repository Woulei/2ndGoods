import React, { Component } from 'react';
import { View, Text, TouchableHighlight, KeyboardAvoidingView } from 'react-native';

import styles from './StorageForm.styles';
import t from 'tcomb-form-native';
import Storage, { formOptions } from '../model/Storage';

export default class StorageForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { form } = this.refs;
    const newStorage = form.getValue();
    if (!newForm) return;
    console.log(newForm);
  }

  render() {
    const Form = t.form.Form;

    return (
      <View style={styles.outerContainer}>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.container}
        >
          <Form ref="form" type={Storage} options={formOptions} />
          <Text style={styles.Text}>{"Wij kunnen voor uw de opslag van het artikel verzorgen tijdens het verkoop proces.\n"}</Text>
          <Text style={styles.Text}>{"We komen het artikel dan bij de eerder opgegeven locatie ophalen.\n"}</Text>
          <Text style={styles.Text}>{"We vragen hiervoor een kleine kilometer vergoeding.\n"}</Text>
          <TouchableHighlight style={styles.button} onPress={this.onSubmit} underlayColor='#99d9f4' >
            <Text style={styles.buttonText}>Verzend aanvraag</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
