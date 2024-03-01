import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';

function LoginText() {

    return (
        <View>
            <Text style={{ fontSize: 25, fontWeight: 'bold', }}>Faça Login</Text> 
        </View> // Texto de título do submenu do Login, componente LoginText
    )
}
export default LoginText;