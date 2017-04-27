import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

import styles from './SecondGoods.styles';
import TitleScreen from './screens/TitleScreen';
import Header from './screens/Header';
import Article from './screens/Article';
import Button from './Button';

export default class MyMainView extends Component {
  setParentState(args){
    this.props.setParentState(args)
  }

  render(){
    return (
      <ScrollView>
      <Header />
        <View>
          <Button
            style={styles.container}
            onPress={this.props.openDrawer}
            text="Open Drawer"
            />
        </View>
          <Article />
      </ScrollView>



    )
  }
}
