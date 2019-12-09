/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
//import liraries
import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Icon,
  Right,
  Left,
  Thumbnail,
  Body,
  Button,
} from 'native-base';

class Category extends Component {
  render() {
    return (
      <Card>
        <CardItem cardBody>
          <CardItem
            style={{
              position: 'absolute',
              zIndex: 1,
              backgroundColor: '#ffb900',
              width: 135,
              height: 36,
              alignSelf: 'flex-start',
              opacity: 0.7,
              borderBottomRightRadius: 4,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
              {this.props.title}
            </Text>
          </CardItem>
          <Image
            style={{height: 118, width: '100%'}}
            source={{
              uri: `${this.props.image}`,
            }}
          />
        </CardItem>
      </Card>
    );
  }
}

//make this component available to the app
export default Category;
