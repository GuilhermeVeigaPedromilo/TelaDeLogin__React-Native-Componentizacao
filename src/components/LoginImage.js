import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';

function LoginImage() {

    return (
        <View style={{alignItems: 'center',}} >
            <Image
                style={{ width: 100, height: 25, marginTop: 30, alignItems: 'center' }}
                source={require('../assets/images/senai.png')} />
        </View> //Imagem SENAI, componente
    );
}
export default LoginImage;