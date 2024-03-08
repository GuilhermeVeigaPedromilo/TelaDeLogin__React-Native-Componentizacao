import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';
import styles from '../css/stylelogin'; // Importando styles, do folder CSS


function LoginImageBackground({children}) {

    return (
            <ImageBackground
                style={styles.body}
                source={require('../assets/images/fundologin.jpg')}>
                {children}
                </ImageBackground>
    );
}


export default LoginImageBackground;