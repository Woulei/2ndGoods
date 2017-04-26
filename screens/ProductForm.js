import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight, KeyboardAvoidingView } from 'react-native';

import styles from './ProductForm.styles';
import t from 'tcomb-form-native';
import Product, { productFormOptions } from '../model/Product';
import ImagePicker from 'react-native-image-picker';
import Carousel from 'react-native-snap-carousel';

var imageOptions = {
  title: 'Selecteer product foto',
  mediaType: 'photo',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};



export default class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {productPhotos: []};

    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit() {
    const { form } = this.refs;
    const newProduct = form.getValue();
    if (!newProduct) return;
    console.log(newProduct);
  }

  render() {
    const Form = t.form.Form;
    let sliderWidth = 200;
    let itemWidth = 50;

    return (
      <View style={styles.outerContainer}>
        <KeyboardAvoidingView behavior="padding" style={styles.container} >
          <Form ref="form" type={Product} options={productFormOptions} />
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
            <Text style={styles.buttonText}>Volgende stap</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
