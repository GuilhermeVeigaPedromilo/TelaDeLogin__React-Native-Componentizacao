import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';
import styles from '../css/stylelogin';
import LoginText from './LoginText';
import LoginButton from './LoginButton';
import LoginInput from './LoginInput';
import LoginImage from './LoginImage';

function LoginImageBackground() {

    return (
        <View style={{flex: 1, }} >
            <ImageBackground
                style={styles.body}
                source={require('../assets/images/fundologin.jpg')}>
                    <View style={styles.container}>
                <View style={styles.submenu}>
                    <LoginText />
                    <View style={{ gap: 10, }} >
                        <LoginInput />
                        <LoginButton />
                    </View>

                </View>
                <LoginImage />
                </View>
            </ImageBackground>
        </View>
    )
}
export default LoginImageBackground;