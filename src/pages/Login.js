import React from 'react';
import LoginImageBackground from '../components/LoginImageBackground'; //Aqui está importando o componente LoginImageBackground 

function Login() { // Alteração aqui: export default function Login()

  return (
        <LoginImageBackground /> //Aqui está renderizando o componente LoginImageBackground na página Login
  );
}

export default Login;