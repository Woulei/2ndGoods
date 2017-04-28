import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Font from 'react-native-vector-icons/FontAwesome';

import styles from './Page.styles';

export default class PageContact extends Component {
  render() {
    return (
      <ScrollView style={styles.outerContainer} >
        <View style={styles.container} >



          <Text style={styles.headerLeft} >{'Adres'}</Text>
          <Text style={styles.text} >{'Prins'}</Text>
          <Text style={styles.text} >{'1097 BE'}</Text>
          <Text style={styles.text} >{' Amsterdam'}</Text>


          <Text style={styles.headerLeft} >{'Hoofdkantoor en opslag:'}</Text>
          <Text style={styles.text} >{'Randstad 22147'}</Text>
          <Text style={styles.text} >{'1316 BM'}</Text>
          <Text style={styles.text} >{'Almere'}</Text>

          <Text style={styles.headerLeft} >{'E-Mail:'}</Text>
          <Text style={styles.text} >{'info@2ndgoods.nl'}</Text>

          <Text style={styles.headerLeft} >{'Telefoon:'}</Text>
          <Text style={styles.text} >{'+31611863785'}</Text>

          <Text style={styles.text} >{'www.2ndGoods.nl'}</Text>

          <Text style={styles.headerLeft} >{'KvK-nummer:'}</Text>
          <Text style={styles.text} >{'68642814'}</Text>

          </View>
      </ScrollView>
    );
  }
}
