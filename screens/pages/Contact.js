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


          <Icon style={styles.captionIcon} name="minus" size={50} />
          <Text style={styles.text} >{'Adres'}</Text>
          <Text style={styles.text} >{'Prins'}</Text>
          <Text style={styles.text} >{'1097 BE'}</Text>
          <Text style={styles.text} >{' Amsterdam'}</Text>
          <Icon style={styles.captionIcon} name="minus" size={50} />


          <Text style={styles.headerLeft} >{'Hoofdkantoor en opslag:'}</Text>
          <Text style={styles.text} >{'Randstad 22147'}</Text>
          <Text style={styles.text} >{'1316 BM'}</Text>
          <Text style={styles.text} >{'Almere'}</Text>
          <Icon style={styles.captionIcon} name="minus" size={50} />

          <Text style={styles.headerLeft} >{'E-Mail:'}</Text>
          <Text style={styles.text} >{'info@2ndgoods.nl'}</Text>
          <Icon style={styles.captionIcon} name="minus" size={50} />

          <Text style={styles.headerLeft} >{'Komen jullie het meubelstuk gelijk ophalen?'}</Text>
          <Text style={styles.text} >{'Dit is mogelijk, wij nemen je meubelstuk(ken) dan in opslag. Hier betaal je eenmalig transportkosten voor. Opslag tijdens de verkooptijd is gratis.'}</Text>
          <Icon style={styles.captionIcon} name="minus" size={50} />

          <Text style={styles.headerLeft} >{'Als ik ervoor kies om het meubelstuk thuis te houden, wat gebeurt er dan na de verkoop?'}</Text>
          <Text style={styles.textUnderline} >{'Er zijn twee mogelijkheden:'}</Text>
          <Icon style={styles.captionIcon} name="minus" size={50} />

          <Text style={styles.text}>{'1. De koper komt na de betaling het meubelstuk ophalen, hier kan eventueel iemand van ons aanwezig bij zijn.'}</Text>
          <Text style={styles.text}>{'2. Wij komen het meubelstuk ophalen en brengen het naar de koper, hiervoor betaalt de koper de transportkosten.'}</Text>
          <Text style={styles.textItalic} >{'Als verkoper betaal je alleen transportkosten wanneer we de meubelstukken in opslag nemen.'}</Text>
          <Icon style={styles.captionIcon} name="minus" size={50} />

          </View>
      </ScrollView>
    );
  }
}
