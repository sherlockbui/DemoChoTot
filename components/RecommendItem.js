/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

class RecommendItem extends Component {
  render() {
    return (
      <Container style={{height: 320}}>
        <Content>
          <Card>
            <CardItem cardBody>
              <Image
                source={{
                  uri: `${this.props.image}`,
                }}
                style={{
                  height: 180,
                  width: null,
                  flex: 1,
                  resizeMode: 'contain',
                }}
              />
            </CardItem>
            <CardItem
              style={{alignItems: 'flex-start', flexDirection: 'column'}}>
              <Text
                style={{fontWeight: '500', fontSize: 16, color: 'black'}}
                numberOfLines={1}>
                {this.props.title}
              </Text>
              <Text style={{fontSize: 12, color: '#999999'}}>
                {this.props.address}
              </Text>
            </CardItem>
            <CardItem>
              <Left>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
                  {this.props.price != null
                    ? this.props.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                    : '0'}
                </Text>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default RecommendItem;
