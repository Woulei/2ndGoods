import React, { Component } from 'react';
import { View, Text, TouchableHighlight, KeyboardAvoidingView, ScrollView, Image } from 'react-native';

import styles from './Article.styles';
import t from 'tcomb-form-native';
import Article, { formOptions } from '../forms/ArticleForm';
import ImagePicker from 'react-native-image-picker';
import Carousel from 'react-native-snap-carousel';
import productApi from '../api/product';
import ApiUtils from '../api/apiUtils';

var imageOptions = {
  title: 'Selecteer product foto',
  mediaType: 'photo',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};


export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {productPhotos: []};

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { form } = this.refs;
    const newArticle = form.getValue();
    if (!newArticle) return;
    console.log('newArticle', JSON.stringify(newArticle));
    fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArticle)
    })
    .then(ApiUtils.checkStatus)
    .then(response => response.json())
    .catch( e => { console.error(e);})
  }

  myPhotoFunc() {
    ImagePicker.showImagePicker(imageOptions, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        let source = { uri: response.uri };
        this.setState({
          productPhotos: this.state.productPhotos.concat([ source ])
        })
        console.log('productPhotos[0]: ', this.state.productPhotos[0]);
      }
    })
  }

  render() {
    const Form = t.form.Form;
    let sliderWidth = 300;
    let itemWidth = 50;

    return (
      <ScrollView style={styles.outerContainer}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Form ref="form" type={Article} options={formOptions} />
          <TouchableHighlight style={styles.button} onPress={this.myPhotoFunc.bind(this)} underlayColor="#99d9f4" >
            <Text style={styles.buttonText}>Voeg een foto toe</Text>
          </TouchableHighlight>
          {this.state.productPhotos.length > 0 ?
            (
              <Carousel ref={(carousel => {this._carousel = carousel;})}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                firstItem={1}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.6}
                enableMomentum={false}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContainer}
                showsHorizontalScrollIndicator={false}
                snapOnAndroid={true}
                removeClippedSubviews={false}
               >
                {this.state.productPhotos.map((photo, index) =>
                  <Image key={index} style={{width: 100, height: 100}} source={photo} />
                )}
              </Carousel>
            )
            :
            (<Text style={styles.title}>Kies tenminste 1 foto</Text>)
          }
          <TouchableHighlight style={styles.button} onPress={this.onSubmit} underlayColor='#99d9f4' >
            <Text style={styles.buttonText}>Verzend aanvraag</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </ScrollView>

    );
  }
}
