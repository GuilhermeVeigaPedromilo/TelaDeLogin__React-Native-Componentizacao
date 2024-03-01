import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';
import styles from '../css/stylelogin'; // Importando styles, do folder CSS

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
        </View>// Inputs do submenu do Login, componente LoginInput
    );
}
export default LoginInput;

