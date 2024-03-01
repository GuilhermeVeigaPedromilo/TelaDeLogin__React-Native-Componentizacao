import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';
import Login from './src/pages/Login'; //Aqui está importando a página Login para o APP


export default function App() { // Alteração aqui: export default function Login()

  return (
      <Login /> //Aqui está renderizando a página Login no APP 
  );
}
