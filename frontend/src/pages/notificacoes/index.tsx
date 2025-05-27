import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importando a navegação
import { StackNavigationProp } from "@react-navigation/stack"; // Tipagem da navegação
import { RootStackParamList } from "../../routes/types"; // Importando o tipo das rotas
import { styleNofificacao } from "./styles";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const Notificacoes = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>(); // Tipando a navegação
  return (
    <View style={styleNofificacao.container}>
      {/* Header */}
      <View style={styleNofificacao.headerDynamic}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../../../assets/icones/voltar.png")}
            style={styleNofificacao.buttonTopVoltar}
          />
        </TouchableOpacity>

        <View style={styleNofificacao.telaTituloCentro}>
          <Text style={styleNofificacao.acimaTitulo}>
            ATUALIZAÇÕES PESSOAIS
          </Text>
          <Text style={styleNofificacao.titulo}>Notificações</Text>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styleNofificacao.cardMain}
      >
        <Text style={styleNofificacao.titulo}>Atualizado 3 - 03/04/2025</Text>
      </ScrollView>
    </View>
  );
};

export default Notificacoes;
