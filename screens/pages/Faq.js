import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import QuestionMark from 'react-native-vector-icons/FontAwesome';

import styles from './Page.styles';


export default class PageFaq extends Component {
  render() {
    return (
      <ScrollView style={styles.outerContainer} >
        <View style={styles.container} >
          <Text style={styles.headerLeft} >{'Kunnen we je helpen? Je vindt hier alle antwoorden op de veelgestelde vragen. Staat het antwoord op jouw vraag er niet bij, dan kan je op verschillende manieren contact met ons opnemen.'}</Text>


          <Icon style={styles.captionIcon} name="minus" size={50} />
          <Text style={styles.headerLeft} >{'Ik weet niet wat mijn meubels waard zijn, wat nu?'}</Text>
          <Text style={styles.text} >{'Wij kunnen je helpen de waarde te bepalen'}</Text>
          <Icon style={styles.captionIcon} name="minus" size={50} />


          <Text style={styles.headerLeft} >{'Ontvang ik meteen geld voor mijn meubelstukken?'}</Text>
          <Text style={styles.text} >{'Nee, je ontvangt het geld binnen een week nadat het meubelstuk verkocht is.'}</Text>
          <Icon style={styles.captionIcon} name="minus" size={50} />

          <Text style={styles.headerLeft} >{'Hoe lang duurt het voordat mijn meubelstuk verkocht is?'}</Text>
          <Text style={styles.text} >{'De meeste meubels worden binnen 2 weken verkocht, we kunnen hier bij het maken van de afspraak een indicatie over geven.'}</Text>
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


          <Text style={styles.headerLeft} >{'Kan ik later nog foto’s van het meubelstuk toevoegen?'}</Text>
          <Text style={styles.text} >{'Ja, dat is geen enkel probleem. We controleren je aanmelding altijd op volledigheid. Bij het ontbreken van foto’s sturen we een mail zodat je de mogelijkheid krijgt om nog foto’s toe te voegen.'}</Text>
          <Icon style={styles.captionIcon} name="minus" size={50} />

          <Text style={styles.headerLeft} >{'Kan ik beschadigde meubels verkopen?'}</Text>
          <Text style={styles.text} >{'Ja, dat kan zeker. Tussen onze klanten zitten ook kopers van beschadigde producten. Daarnaast kunnen we altijd samen kijken naar de kosten voor een kleine opknapbeurt.'}</Text>
          <Icon style={styles.captionIcon} name="minus" size={50} />

          <Text style={styles.headerLeft} >{'Wat houdt de verwachte prijs in?'}</Text>
          <Text style={styles.text} >{'De verwachte prijs kun je bij het gesprek aangeven. Dit is het bedrag waarvoor je verwacht het tweedehands meubelstuk kan worden verkocht.'}</Text>
          <Icon style={styles.captionIcon} name="minus" size={50} />

          <Text style={styles.headerLeft} >{'Ben ik verplicht te verkopen als ik mijn meubel(s) in consignatie geef?'}</Text>
          <Text style={styles.text} >{'Ja. Als de verkoopprijs gelijk is aan uw verwachte prijs, of maximaal 15% lager, dan bent u verplicht afstand te doen van het product. Ligt de verkoopprijs lager dan deze 15%,dan treden we eerst met u in overleg en bent u tot niets verplicht.'}</Text>
          <Icon style={styles.captionIcon} name="minus" size={50} />

          <Text style={styles.headerLeft} >{'Hoe gaat de betaling bij verkoop?'}</Text>
          <Text style={styles.text} >{'De betaling wordt via bankoverschrijving gedaan.'}</Text>
          <Icon style={styles.captionIcon} name="minus" size={50} />

          <Text style={styles.headerLeft} >{'Wat zijn de kosten?'}</Text>
          <Text style={styles.text} >{'Wij vragen een vaste commissie van 30% Wordt een meubelstuk bijvoorbeeld voor €100,- verkocht, ontvang je daar €70 voor.'}</Text>

          </View>
      </ScrollView>
    );
  }
}
