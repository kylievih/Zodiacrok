import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importando a navegação
import { StackNavigationProp } from "@react-navigation/stack"; // Tipagem da navegação
import { RootStackParamList } from "../../routes/types"; // Importando o tipo das rotas
import { styleConfPerfil } from "../confPerfil/styles";

// Definindo o tipo de navegação para a tela Home
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export default function ConfPerfil() {
  const navigation = useNavigation<HomeScreenNavigationProp>(); // Tipando a navegação

  return (
    <View style={styleConfPerfil.container}>
      {/* Header */}
      <View style={styleConfPerfil.headerDynamic}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../../../assets/icones/voltar.png")}
            style={styleConfPerfil.buttonTopVoltar}
          />
        </TouchableOpacity>

        <View style={styleConfPerfil.telaTituloCentro}>
          <Text style={styleConfPerfil.acimaTitulo}>INFORMAÇÕES SENSÍVEIS</Text>
          <Text style={styleConfPerfil.titulo}>Editar Perfil</Text>
        </View>

        <TouchableOpacity style={styleConfPerfil.buttonTop}>
          <Image
            source={require("../../../../assets/icones/EditarPerfil.png")}
            style={styleConfPerfil.iconeTop}
          />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styleConfPerfil.cardConfPerfil}
      >
        {/* Perfil Section */}
        <View style={styleConfPerfil.cardCabecalho}>
          <View style={styleConfPerfil.cabecalho}>
            <View style={styleConfPerfil.titleICON}>
              <Text style={styleConfPerfil.sectionTitleICON}>Foto</Text>
            </View>
          </View>
        </View>

        {/* Imagem do Perfil */}
        <View style={styleConfPerfil.headerPerfil}>
          <Image
            source={require("../../../../assets/imagensExemplos/editarPerfil.png")}
            style={styleConfPerfil.fundoEditarPerfil}
          />
          <View style={styleConfPerfil.headerPost}>
            <Image
              source={require("../../../../assets/imagensExemplos/glauber.png")}
              style={styleConfPerfil.profileImage}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
