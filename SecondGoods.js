import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Drawer from 'react-native-drawer'

import styles from './SecondGoods.styles';
import TitleScreen from './screens/TitleScreen';
import Header from './screens/Header';
import UserForm from './screens/UserForm';
import ProductForm from './screens/ProductForm';
import StorageForm from './screens/StorageForm';

export default class SecondGoods extends Component {
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <UserForm />
          <ProductForm />
          <StorageForm />
        </ScrollView>        
      </View>
    );
  }
}
