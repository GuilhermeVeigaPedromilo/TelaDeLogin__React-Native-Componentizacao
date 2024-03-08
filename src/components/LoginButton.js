import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

function LoginButton() {

    const button = () => { // Alteração aqui: Adicionei o "const" para definir a função
        alert("Login");
    }

    return (
        <View>
            <TouchableOpacity onPress={button} style={{backgroundColor: 'black', padding: 5, borderRadius: 15, alignItems: 'center',}} >
                <Text style={{color: 'white'}} >Login</Text>
            </TouchableOpacity>
        </View> //Componente Buttonn
    );
}
export default LoginButton;