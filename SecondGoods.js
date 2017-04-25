import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './SecondGoods.styles';
import TitleScreen from './screens/TitleScreen';
import Header from './screens/Header';
import UserForm from './screens/UserForm';
import ProductForm from './screens/ProductForm';
import StorageForm from './screens/StorageForm';

export default class SecondGoods extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <UserForm />
        <ProductForm />
        <StorageForm />
      </View>
    );
  }
}
