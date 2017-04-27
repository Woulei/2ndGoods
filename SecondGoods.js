import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Drawer from 'react-native-drawer'

import styles from './SecondGoods.styles';
import TitleScreen from './screens/TitleScreen';
import Header from './screens/Header';
import Article from './screens/Article';
import Button from './Button';

  const self = this;

export default class SecondGoods extends Component {
  setParentState(args){
    this.props.setParentState(args)
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Button
          onPress={this.props.openDrawer}
          text="Open Drawer"
          />
        <ScrollView>
          <Article />
        </ScrollView>
      </View>
    );
  }
}
