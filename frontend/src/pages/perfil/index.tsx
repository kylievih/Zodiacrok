import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importando a navegação
import { StackNavigationProp } from "@react-navigation/stack"; // Tipagem da navegação
import { RootStackParamList } from "../../routes/types"; // Importando o tipo das rotas
import { stylePerfil } from "../perfil/styles";

// Definindo o tipo de navegação para a tela Home
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export default function Perfil() {
  const navigation = useNavigation<HomeScreenNavigationProp>(); // Tipando a navegação

  return (
    <View style={stylePerfil.container}>
      {/* Header */}
      <View style={stylePerfil.headerDynamic}>
        <View style={stylePerfil.telaTituloCentro}>
          <Text style={stylePerfil.acimaTitulo}>@KYLIE</Text>
          <Text style={stylePerfil.titulo}>Kylie</Text>
        </View>

        <View style={stylePerfil.IconsTop}>
          {/* Botão de Configuração do Perfil */}
          <TouchableOpacity onPress={() => navigation.navigate("ConfPerfil")}>
            <Image
              source={require("../../../../assets/icones/IconConfigurações 3.png")}
              style={stylePerfil.iconeTop}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={stylePerfil.buttonTop}>
          <Image
            source={require("../../../../assets/icones/EditarPerfil.png")}
            style={stylePerfil.iconeTop}
          />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={stylePerfil.cardPerfil}
      >
        {/* Perfil Section */}
        <View style={stylePerfil.cardCabecalho}>
          <View style={stylePerfil.cabecalho}>
            <View style={stylePerfil.titleICON}>
              <Text style={stylePerfil.sectionTitleICON}>Perfil</Text>
            </View>
            <TouchableOpacity style={stylePerfil.buttonSubtitulo}>
              <Image
                source={require("../../../../assets/icones/tresPontos.png")}
                style={stylePerfil.tresPontos}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Perfil */}
        <View style={stylePerfil.cardFeed}>
          {/* Imagem do Perfil */}
          <View style={stylePerfil.headerPerfil}>
            <View style={stylePerfil.headerPost}>
              <Image
                source={require("../../../../assets/imagensExemplos/glauber.png")}
                style={stylePerfil.profileImage}
              />

              <View style={stylePerfil.headerImageRokmoji}>
                <Image
                  source={require("../../../../assets/imagensExemplos/RokmijihGLAUBER.png")}
                  style={stylePerfil.profileImageRokmoji}
                />
              </View>
            </View>
          </View>

          {/* Sessão Meus Posts */}
          <View style={stylePerfil.cardPost}>
            {/* Card Post 1 */}
            <View style={stylePerfil.post}>
              <Image
                source={require("../../../../assets/PostFeed/Rectangle 80.png")}
                style={[stylePerfil.postImage, { aspectRatio: 1 }]} // Ajuste a proporção aqui
              />
            </View>

            {/* Card Post 2 */}
            <View style={stylePerfil.post}>
              <Image
                source={require("../../../../assets/PostFeed/image 86.png")}
                style={[stylePerfil.postImage, { aspectRatio: 1.5 }]} // Ajuste a proporção aqui
              />
            </View>

            {/* Card Post 3 */}
            <View style={stylePerfil.post}>
              <Image
                source={require("../../../../assets/PostFeed/image 91.png")}
                style={[stylePerfil.postImage, { aspectRatio: 1 }]} // Ajuste a proporção aqui
              />
            </View>

            {/* Card Post 4 */}
            <View style={stylePerfil.post}>
              <Image
                source={require("../../../../assets/PostFeed/image 86.png")}
                style={[stylePerfil.postImage, { aspectRatio: 1.5 }]} // Ajuste a proporção aqui
              />
            </View>
            {/* Card Post 5 */}
            <View style={stylePerfil.post}>
              <Image
                source={require("../../../../assets/PostFeed/Rectangle 80.png")}
                style={[stylePerfil.postImage, { aspectRatio: 1 }]} // Ajuste a proporção aqui
              />
            </View>
            {/* Card Post 6 */}
            <View style={stylePerfil.post}>
              <Image
                source={require("../../../../assets/PostFeed/image 91.png")}
                style={[stylePerfil.postImage, { aspectRatio: 1.5 }]} // Ajuste a proporção aqui
              />
            </View>

            {/* Card Post 7 */}
            <View style={stylePerfil.post}>
              <Image
                source={require("../../../../assets/PostFeed/image 86.png")}
                style={[stylePerfil.postImage, { aspectRatio: 1 }]} // Ajuste a proporção aqui
              />
            </View>
            {/* Card Post 8 */}
            <View style={stylePerfil.post}>
              <Image
                source={require("../../../../assets/PostFeed/Rectangle 80.png")}
                style={[stylePerfil.postImage, { aspectRatio: 1.5 }]} // Ajuste a proporção aqui
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
