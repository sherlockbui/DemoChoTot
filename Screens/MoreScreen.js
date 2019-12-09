/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Animated,
  FlashList,
  Dimensions,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Category from '../components/Category';
import {articles_url, api_key} from '../config/rest_config';
import {getData} from '../data/MoreScreenData';
import RecommendItem from '../components/RecommendItem';
class MoreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
    };
  }
  componentDidMount() {
    const {navigation} = this.props;
    getData(navigation.getParam('value')).then(data => {
      this.setState({
        isLoading: false,
        data: data,
      });
    });
  }
  render() {
    console.log(this.state.data);
    return (
      <View style={{flex: 1, padding: 10}}>
        <View>
          <Category
            title="Bat Dong San"
            image="https://s3-alpha-sig.figma.com/img/c3f7/4be1/ecd76438ecf56e1d53c97b371c09546f?Expires=1576454400&Signature=WnrbGycxu2TCvkZ-~mZ0KtTJ6OeKW2A2HfnO9y1R618~dTQSfSFY9igabBW5EgJuLNzwlscaxEgDr1s1Pn9tv3IuZK2vAwLsKQtkNAlw~GuB49WbzL17faNfjYLzHdoiC5Nru24WqSPTn2vS9p0-SfNVNOpBLLFCCJusWaJHK1rUobCZvm6oKfnmf9GXNGgj2yLWL9KRmTl-ay~58Tu4ASDt0luXRQ2BLEysdGte-wJH42pFg44eYjJpGORGztB4So953HgxxGbrFRHMV7Trmpqiqv3k6PK3GjNXJXU9cnuqcBr3kuqnZmrr2LBLeMxQUwVizSAlPLemdDuZcEm5hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
          <Category
            title="Do Dien Tu"
            image="https://s3-alpha-sig.figma.com/img/62a9/fb5c/01f6ab2445263622f54b2ea81bf1ce52?Expires=1576454400&Signature=J2M9XGCTVxBY9o9MWkd-L14LDBjmDneoQ6NDUcnfG3~wSkCy4Ao5B5X0Hrxq161nVHkiQDfH3aAKfMWdYloLACLMHsqKvPulGN-Le5qoaF~fC8fNymHJXurBQOFwMRVTELj9ggxN4M846Qc7q4O21i2HOC8yAx6aLPrzWGWesoaBBwy6xg-~ooUrQqkGJ~5hJju1qntshjoH~YKKYaatrWVfgiBHt0gDqQumJJGVWyKefF3ULqiyfEE2QiIBS1vaqmQC54muVTQnJ27W-GSoY1lMMwgs7ShxTHZdrem2AlbcSisEW7aNa08StTPk0pnnuUBAqloiDo6uSw4T~jAIwQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </View>

        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 16,
            paddingVertical: 10,
          }}>
          Có thể bạn quan tâm
        </Text>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('ItemDetail', {item})
                }>
                <RecommendItem
                image = {item.image}
                  title={item.subject}
                  address={item.region}
                  price={item.price}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.list_id.toString()}
          />
        </View>
      </View>
    );
  }
}

export default MoreScreen;
