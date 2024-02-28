import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';

function LoginButton() {

    const button = () => { // Alteração aqui: Adicionei o "const" para definir a função
        alert("Login");
    }

    return (
        <View>
            <Button
                placeholder='Login'
                title='Login'
                onPress={button}
                color='black'
            />
        </View>
    )
}
export default LoginButton;