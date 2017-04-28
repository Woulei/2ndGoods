import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';



import styles from './Page.styles';


export default class PageHowDoesItWork extends Component {
  render() {
    return (
      <ScrollView style={styles.outerContainer} >
      <View style={styles.container}>
        <Text style={styles.title}>{'Verhuizing of herinrichting?'}</Text>
        <Text style={styles.header}>{'Verkoop je meubels via 2nd Goods'}</Text>
          <View style={styles.captionBox}>
            <Icon style={styles.captionIcon} name="camera-retro" size={50} />
            <Icon style={styles.captionIcon} name="calendar" size={50} />
            <Icon style={styles.captionIcon} name="money" size={50} />
          </View>
        <View style={styles.captionBox}>
          <Text style={styles.caption}>{'Maak een foto van je meubels en upload ze via de app'}</Text>
          <Text style={styles.caption}>{'We plannen een afspraak om langs te komen'}</Text>
          <Text style={styles.caption}>{'Ontspan, terwijl wij geld voor je verdienen!'}</Text>
        </View>
        <Text style={styles.header}>{'Maak een foto'}</Text>
        <Text style={styles.text}>{'Maak een foto van de meubelstukken die je wilt verkopen en upload ze met wat basisinformatie via de app of website. Aan de hand van de foto en de informatie beoordelen we de verkoopprijs.'}</Text>
        <Text style={styles.header}>{'Maak een afspraak'}</Text>
        <Text style={styles.text}>{'Vervolgens nemen we contact op om het verdere verloop te bespreken. Er kan vervolgens een afspraak gemaakt worden voor het ophalen of afleven en eventueel professionele foto’s te maken.'}</Text>
        <Text style={styles.header}>{'Ontvang je geld'}</Text>
        <Text style={styles.text}>{'Via onze online kanalen zetten we de meubelstukken te koop. Je krijgt een bericht wanneer het meubelstuk verkocht is en binnen een week ontvang je het geld. Van alle rompslomp rondom de verkoop krijg je dus niks mee.'}</Text>
        </View>
      </ScrollView>
    );
  }
}
