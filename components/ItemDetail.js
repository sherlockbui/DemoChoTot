/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {Text, View, Image, ScrollView, FlatList} from 'react-native';
import {getData} from '../data/MoreScreenData';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Left,
  Body,
  Right,
} from 'native-base';
export default class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
    };
  }
  componentDidMount() {
    getData().then(data => {
      this.setState({
        isLoading: false,
        data: data,
      });
    });
  }
  _renderItem = ({item}) => {
    return (
      <Card style={{width: 250}}>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                'https://s3-alpha-sig.figma.com/img/fa8e/67ba/3b6ab6a48ba742678fe3efd767c3bfc1?Expires=1576454400&Signature=Ly3aYKo7d1PcJUXjz-Qt5R0eLSaRG9AeON5S3AXdEgZLXuT5V2tTIt0beFEV6qUebEkZHuHejygdteW5Q8eAN7huJoGbnbgMCNcb2nUbn1iKX6cqmOmxPmk0r4Aib2qaIHpc-yveKkAUkzblI-bsmHwZK1SooDPUUAqRquGH0R4QbP8TqEAwWdex3VCu7HRq9sjmPCGJ1V7p2WsIWlNwFxDvXtGrYWNDZ6hIUFF6SmmQKjNBf8xz1UPQSD9aidFXSTt1s0347PpP5xfuqOUZPOOvXH7I8ZtGljiANAgE1F-sZX~cWEbFj2zdpG6SBUjyKRc8cBNOzNZ8c7rMKdKL5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
            style={{height: 180, width: 250}}
          />
        </CardItem>
        <CardItem style={{alignItems: 'flex-start', flexDirection: 'column'}}>
          <Text
            style={{fontWeight: '500', fontSize: 16, color: 'black'}}
            numberOfLines={1}>
            {item.subject}
          </Text>
          <Text style={{fontSize: 12, color: '#999999'}}>{item.region}</Text>
        </CardItem>
        <CardItem>
          <Left>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
              {item.price != null
                ? item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                : '0'}
            </Text>
          </Left>
        </CardItem>
      </Card>
    );
  };
  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('item');
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#E5E5E5'}}>
        <Image
          style={{
            height: 300,
            width: '100%',
            backgroundColor: 'white',
            resizeMode: 'contain',
          }}
          source={{
            uri: `${item.image}`,
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            padding: 20,
            height: 170,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: '500',
              lineHeight: 24,
            }}>
            {item.subject}
          </Text>
          <Text
            style={{
              fontSize: 24,
              lineHeight: 29,
              fontWeight: 'bold',
              marginTop: 12,
            }}>
            {item.price}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 14, lineHeight: 17, fontWeight: 'bold'}}>
              Địa Chỉ:
            </Text>
            <Text style={{fontSize: 14, lineHeight: 17}}> {item.region}</Text>
          </View>
        </View>
        <View
          style={{
            height: 272,
            marginTop: 20,
            backgroundColor: 'white',
            padding: 20,
          }}>
          <Text style={{fontSize: 20, lineHeight: 24}}>Thông tin máy</Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={{fontSize: 24, color: '#666666'}}>{'\u2022'}</Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 14,
                color: '#666666',
                lineHeight: 30,
              }}>
              Hãng
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 24, color: '#666666'}}>{'\u2022'}</Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 14,
                color: '#666666',
                lineHeight: 30,
              }}>
              Dòng Máy
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 24, color: '#666666'}}>{'\u2022'}</Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 14,
                color: '#666666',
                lineHeight: 30,
              }}>
              Tình Trạng
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 24, color: '#666666'}}>{'\u2022'}</Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 14,
                color: '#666666',
                lineHeight: 30,
              }}>
              Màu Sắc
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 24, color: '#666666'}}>{'\u2022'}</Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 14,
                color: '#666666',
                lineHeight: 30,
              }}>
              Dung lượng
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            height: 254,
            padding: 20,
            backgroundColor: 'white',
          }}>
          <Text style={{fontSize: 20}}>Hình Ảnh</Text>
          <View
            style={{
              flexDirection: 'row',
              height: 164,
              flex: 1,
              marginTop: 20,
            }}>
            <Image
              style={{flex: 1, resizeMode: 'contain'}}
              source={{
                uri:
                  'https://s3-alpha-sig.figma.com/img/4f8b/09e0/953498520d8bde38469741a95d03770a?Expires=1576454400&Signature=Bm0HTXXocKVVdZAQGyY8a8j4ZW8eczRyj2rFU1gvZ6Ju2EhTimjqOGogysPAz2qkRk6cauWPEXb59al4T8Nj0XLbu~TED7THcxilck06E11xrwWwBZFXhubu93Zm10GisTdmn~FwvhSIinQ6ztGtiLjW0RocEgiE1AOGHqgiumPYCKi-JsyhNbzTXX8Q4Y-yu8ts7kZJ3aysrrJpI26gA3xKxAIcPX4d82PAFkG4jcLVTSq5SPkZolOp~ArTcUJNTI-FFhlJSGiZJ9bV1E4lfpSesKG7ntZXjTOcr9XUkG~LN-N~aZQMjsydssukRiC3jlOaGSA8becdnhP-udgTPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              }}
            />
            <View
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                }}>
                <Image
                  style={{
                    flex: 1,
                    margin: 4,
                    borderRadius: 8,
                  }}
                  source={{
                    uri:
                      'https://s3-alpha-sig.figma.com/img/9986/627d/bdff87b1fe12feb8ac9fcf26122816cb?Expires=1576454400&Signature=MMsKx~mofA~hyBcoNg51wlQ4fzeY79Xl5ik2t0FpZpbE4nrCpCedVNbGhIVur5EWEIfyua8JUvQFOnXYDMH47vp8brS-WJ6crqFLXOQwgs1HD2Y~ceADCM~b7UIq0VOj3oTVvzp82gug9kRFgGOUBDnBoQMCd5j~AN0b3VuZw1iUVeDs4STUaw19qxUw9o-4CTELmpINzBCe~b8eAU6TGVHGCYUB7lRlK1vBAnuN1i8pBerl~LcgkDWWozGeNBqo6RIhmzxJKr~wphf878MOuydEHz37XxWSJN6gLDmFxglQlBg71oLXV8rcu--DsGK052WUQyvMa9ewJbt~ZJ2Kaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                  }}
                />
                <Image
                  style={{
                    flex: 1,
                    margin: 4,
                    borderRadius: 8,
                  }}
                  source={{
                    uri:
                      'https://s3-alpha-sig.figma.com/img/4f8b/09e0/953498520d8bde38469741a95d03770a?Expires=1576454400&Signature=Bm0HTXXocKVVdZAQGyY8a8j4ZW8eczRyj2rFU1gvZ6Ju2EhTimjqOGogysPAz2qkRk6cauWPEXb59al4T8Nj0XLbu~TED7THcxilck06E11xrwWwBZFXhubu93Zm10GisTdmn~FwvhSIinQ6ztGtiLjW0RocEgiE1AOGHqgiumPYCKi-JsyhNbzTXX8Q4Y-yu8ts7kZJ3aysrrJpI26gA3xKxAIcPX4d82PAFkG4jcLVTSq5SPkZolOp~ArTcUJNTI-FFhlJSGiZJ9bV1E4lfpSesKG7ntZXjTOcr9XUkG~LN-N~aZQMjsydssukRiC3jlOaGSA8becdnhP-udgTPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                }}>
                <Image
                  style={{
                    flex: 1,
                    margin: 4,
                    borderRadius: 8,
                  }}
                  source={{
                    uri:
                      'https://s3-alpha-sig.figma.com/img/9986/627d/bdff87b1fe12feb8ac9fcf26122816cb?Expires=1576454400&Signature=MMsKx~mofA~hyBcoNg51wlQ4fzeY79Xl5ik2t0FpZpbE4nrCpCedVNbGhIVur5EWEIfyua8JUvQFOnXYDMH47vp8brS-WJ6crqFLXOQwgs1HD2Y~ceADCM~b7UIq0VOj3oTVvzp82gug9kRFgGOUBDnBoQMCd5j~AN0b3VuZw1iUVeDs4STUaw19qxUw9o-4CTELmpINzBCe~b8eAU6TGVHGCYUB7lRlK1vBAnuN1i8pBerl~LcgkDWWozGeNBqo6RIhmzxJKr~wphf878MOuydEHz37XxWSJN6gLDmFxglQlBg71oLXV8rcu--DsGK052WUQyvMa9ewJbt~ZJ2Kaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                  }}
                />
                <Image
                  style={{
                    flex: 1,
                    margin: 4,
                    borderRadius: 8,
                  }}
                  source={{
                    uri:
                      'https://s3-alpha-sig.figma.com/img/9986/627d/bdff87b1fe12feb8ac9fcf26122816cb?Expires=1576454400&Signature=MMsKx~mofA~hyBcoNg51wlQ4fzeY79Xl5ik2t0FpZpbE4nrCpCedVNbGhIVur5EWEIfyua8JUvQFOnXYDMH47vp8brS-WJ6crqFLXOQwgs1HD2Y~ceADCM~b7UIq0VOj3oTVvzp82gug9kRFgGOUBDnBoQMCd5j~AN0b3VuZw1iUVeDs4STUaw19qxUw9o-4CTELmpINzBCe~b8eAU6TGVHGCYUB7lRlK1vBAnuN1i8pBerl~LcgkDWWozGeNBqo6RIhmzxJKr~wphf878MOuydEHz37XxWSJN6gLDmFxglQlBg71oLXV8rcu--DsGK052WUQyvMa9ewJbt~ZJ2Kaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            height: 370,
            marginTop: 20,
            padding: 20,
          }}>
          <Text style={{fontSize: 20, lineHeight: 24}}>Sản phẩm liên quan</Text>
          <FlatList
            horizontal={true}
            data={this.state.data}
            renderItem={this._renderItem}
            keyExtractor={item => item.list_id.toString()}
          />
        </View>
        <Card
          style={{
            flex: 1,
            height: 141,
            backgroundColor: 'white',
            marginTop: 20,
            padding: 20,
          }}>
          <Text style={{fontSize: 20}}>Người đăng</Text>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://s3-alpha-sig.figma.com/img/1bf5/001e/360ab6b8c625bc1becbc182ea38ff742?Expires=1576454400&Signature=K2oDsz9~r7UE4fgJwRry~L~4DrYu7fErDmd4j4OwBgZufYx4cxVQDIjpq5K5JWT67ykTVYcDWN~pTCZ2BLjplOFOOd2F5JoSZlxRYKYqvNlwF2BiTNjDYPHXVK8lFZvjqmX~~J2bk6eN-qD1fBHKcvHho4mGjaHOLS~zsmDk3GZt4pdKvspr0410maQrH16kJNouIkhBaDhm9op2gaShkNUou6pl4GNE1d-RAqibGzwEKIA5IEma-llvXlkZf-Y8R92FadX9LrzWE4wo1XIHvWckJkD8zevEp0RMqNXuGcAnYhAFCZ0l0twAtS~kLi0bepMAbeGmEVxlpTZje8UknQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                }}
              />
              <Body>
                <Text>Bảo Bảo</Text>
                <Text style={{fontWeight: 'bold'}}>Cá nhân</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>

        <Card
          style={{
            flex: 1,
            height: 141,
            backgroundColor: 'white',
            marginTop: 10,
            padding: 20,
          }}>
          <Text style={{fontSize: 20}}>Chia sẻ cho bạn bè</Text>
          <CardItem style={{justifyContent: 'space-between'}}>
            <Button transparent>
              <Icon name="logo-facebook" size={50} color="#0084ff" />
            </Button>
            <Button transparent>
              <Icon name="logo-instagram" size={50} color="#0084ff" />
            </Button>

            <Button transparent>
              <Icon name="logo-linkedin" size={50} color="#0084ff" />
            </Button>
            <Button transparent>
              <Icon name="logo-twitter" size={50} color="#0084ff" />
            </Button>
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}
