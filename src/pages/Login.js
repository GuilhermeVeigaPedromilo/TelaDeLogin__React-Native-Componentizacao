import React from 'react';
import { View,  } from 'react-native';
import styles from '../css/stylelogin';
import LoginImageBackground from '../components/LoginImageBackground'; //Aqui está importando o componente LoginImageBackground 
import LoginText from '../components/LoginText'; // Importando componente LoginText
import LoginButton from '../components/LoginButton'; // Importando componente LoginButton
import LoginInput from '../components/LoginInput'; // Importando componente LoginInput
import LoginImage from '../components/LoginImage'; // Importando componente LoginImage

function Login() { // Alteração aqui: export default function Login()

  return (
        <LoginImageBackground>{/*Aqui está renderizando o componente LoginImageBackground na página Login*/}
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
        </LoginImageBackground>
  );
}

export default Login;