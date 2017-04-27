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
import Faq from './screens/faq';

export default class MyMainView extends Component {

  render(){
    return (
      <Router>
          <Scene key="root">
            <Scene key="article" component={Article} title="Gegevens" initial={true} />
            <Scene key="faq" component={Faq} title="FAQ" />
          </Scene>
        </Router>
    )
  }
}
