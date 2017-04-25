import React, { Component } from 'react';
import { View, Text, TouchableHighlight, KeyboardAvoidingView } from 'react-native';

import styles from './ProductForm.styles';
import t from 'tcomb-form-native';
import Product, { productFormOptions } from '../model/Product';


export default class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { form } = this.refs;
    const newProduct = form.getValue();
    if (!newProduct) return;
    console.log(newProduct);
  }

  render() {
    const Form = t.form.Form;

    return (
      <View style={styles.outerContainer}>
        <KeyboardAvoidingView behavior="padding" style={styles.container} >
          <Form ref="form" type={Product} options={productFormOptions} />
          <TouchableHighlight style={styles.button} onPress={this.onSubmit} underlayColor='#99d9f4' >
            <Text style={styles.buttonText}>Next step</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
