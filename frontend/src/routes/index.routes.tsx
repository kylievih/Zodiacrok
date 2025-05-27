import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import BottomRoutes from "./bottom.routes";
import Explorar from "../pages/explorar";
import Notificacoes from "../pages/notificacoes";
import Chat from "../pages/chats";
import ConfPerfil from "../pages/confPerfil";

const Stack = createStackNavigator();

export default function Routers() {
  return (
    <Stack.Navigator
      initialRouteName="Login" // Definindo Login como a tela inicial
      screenOptions={{
        headerShown: false, // Removendo o cabeçalho padrão do React Navigation
        cardStyle: {
          backgroundColor: "#fff", // Definindo fundo branco para todas as telas
        },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
      <Stack.Screen name="Explorar" component={Explorar} />
      <Stack.Screen name="Notificacoes" component={Notificacoes} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ConfPerfil" component={ConfPerfil} />
    </Stack.Navigator>
  );
}
