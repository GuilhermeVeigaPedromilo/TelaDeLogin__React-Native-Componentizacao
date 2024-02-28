import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';
import styles from '../css/stylelogin';

function LoginInput() {

    return (
        <View>
            <TextInput
                placeholder='Digite seu E-mail'
                style={styles.input}
            />
            <TextInput
                secureTextEntry={true}
                placeholder='Digite sua senha'
                style={styles.input}
            />
        </View>
    )
}
export default LoginInput;

