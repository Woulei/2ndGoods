import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

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
import Button from './screens/Button';

// pages:
import HowDoesItWork from './screens/pages/HowDoesItWork';
import Faq from './screens/pages/Faq';
import Commission from './screens/pages/Commission';
import Transportation from './screens/pages/Transportation';
import Consignment from './screens/pages/Consignment';
import Contact from './screens/pages/Contact';

export default class MyMainView extends Component {

  render(){
    return (
      <Router>
        <Scene key="root" tabs={true}>
          <Scene key="Article" component={Article} title="Gegevens" initial={true} />
          <Scene key="Faq" component={Faq} title="FAQ" />
          <Scene key="HowDoesItWork" component={HowDoesItWork} title="Hoe werkt het?" />
          <Scene key="Commission" component={Commission} title="Commissie" />
          <Scene key="Transportation" component={Transportation} title="Transport & Opslag" />
          <Scene key="Consignment" component={Consignment} title="Consignatie Overeenkomst" />
          <Scene key="Contact" component={Contact} title="Contact" />
        </Scene>
      </Router>
    )
  }
}
