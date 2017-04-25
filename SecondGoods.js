import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './SecondGoods.styles';
import TitleScreen from './screens/TitleScreen';
import Header from './screens/Header';
import RequestForm from './screens/RequestForm';
import ProductForm from './screens/ProductForm';

export default class SecondGoods extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <RequestForm />
        <ProductForm />
        <View style={styles.addProduct}>
          <Text>{"Add product"}</Text>
        </View>
      </View>
    );
  }
}
