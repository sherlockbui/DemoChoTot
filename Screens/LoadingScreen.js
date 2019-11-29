
import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';

class LoadingScreen extends Component {
    render() {
        return (
            
            <View style={styles.container}>
                <StatusBar backgroundColor='#FFFFFF' barStyle={'dark-content'}></StatusBar>
                <ActivityIndicator size='large' />
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FFFFFF'

    },
});

export default LoadingScreen;
