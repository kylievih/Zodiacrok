import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importando a navegação
import { StackNavigationProp } from "@react-navigation/stack"; // Tipagem da navegação
import { RootStackParamList } from "../../routes/types"; // Importando o tipo das rotas
import { styleChat } from "../chats/styles";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const Chat = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styleChat.container}>
      {/* Header */}
      <View style={styleChat.headerDynamic}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../../../assets/icones/voltar.png")}
            style={styleChat.buttonTopVoltar}
          />
        </TouchableOpacity>

        <View style={styleChat.telaTituloCentro}>
          <Text style={styleChat.acimaTitulo}>SUAS CONVERSAS</Text>
          <Text style={styleChat.titulo}>Chat</Text>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styleChat.cardMain}
      >
        <Text style={styleChat.titulo}>Atualizado 4 - 15/05/2025</Text>
      </ScrollView>
    </View>
  );
};

export default Chat;
