import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Importando o NavigationContainer para envolver as rotas
import Routers from "./frontend/src/routes/index.routes"; // Importando as rotas configuradas

export default function App() {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
}
