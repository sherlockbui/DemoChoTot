/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
        <View style={styles.contentTop}>
          <View style={styles.topTitle}>
            <Text style={styles.txtTitleStyle}>Đăng nhập</Text>
          </View>
          <View style={styles.textInputWraper}>
            <TextInput
              style={styles.textInputPhoneNumber}
              placeholder="Số Điện Thoại"
              keyboardType="decimal-pad"
              onChangeText={text => this.setState({text})}
              value={this.state.text}
            />
            <TouchableOpacity
              style={styles.btnLoginWraper}
              onPress={() =>
                this.props.navigation.navigate('HomeScreen', {
                  value: this.state.text,
                })
              }>
              <Text style={styles.btnLogin}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 25,
            }}>
            <View style={{backgroundColor: 'gray', height: 1, width: 42}} />
            <Text style={{textAlign: 'center', fontSize: 12, opacity: 0.3}}>
              Sử dụng tài khoản khác để đăng nhập
            </Text>
            <View style={{backgroundColor: 'gray', height: 1, width: 42}} />
          </View>
        </View>

        <View style={styles.contentBottom}>
          <View style={styles.socialLoginWraper} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  contentTop: {
    flex: 1,
    width: '100%',
  },
  contentBottom: {
    flex: 1,
    marginTop: 28,
  },
  textInputPhoneNumber: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 16,
    borderRadius: 28,
    borderColor: '#F2B000',
    borderWidth: 1,
    fontWeight: 'bold',
    fontSize: 16,
    height: 56,
    width: '100%',
  },
  btnLoginWraper: {
    backgroundColor: '#F2B000',
    borderRadius: 28,
    marginHorizontal: 16,
    paddingVertical: 16,
    height: 56,
    width: '100%',
  },
  topTitle: {
    flex: 1,
    justifyContent: 'center',
  },
  txtTitleStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInputWraper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnLogin: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  socialLoginWraper: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btnSocialLogin: {
    width: 165,
    height: 56,
    justifyContent: 'center',
  },
});
