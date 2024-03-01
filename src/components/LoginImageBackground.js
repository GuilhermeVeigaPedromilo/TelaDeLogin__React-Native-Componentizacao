import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';
import styles from '../css/stylelogin'; // Importando styles, do folder CSS
import LoginText from './LoginText'; // Importando componente LoginText
import LoginButton from './LoginButton'; // Importando componente LoginButton
import LoginInput from './LoginInput'; // Importando componente LoginInput
import LoginImage from './LoginImage'; // Importando componente LoginImage

function LoginImageBackground() {

    return (
        <View style={{flex: 1, }} >
            <ImageBackground
                style={styles.body}
                source={require('../assets/images/fundologin.jpg')}>
                    <View style={styles.container}>
                <View style={styles.submenu}>
                    <LoginText /> {/* Renderizando componente LoginText */}
                    <View style={{ gap: 10, }} >
                        <LoginInput /> {/* Renderizando componente LoginInput */}
                        <LoginButton />  {/* Renderizando componente LoginButton */}
                    </View>
                </View>
                <LoginImage /> {/* Renderizando componente LoginImage */}
                </View> 
            </ImageBackground> 
        </View>
    );
}
export default LoginImageBackground;