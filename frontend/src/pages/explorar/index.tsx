import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/types";
import { styleExplorar } from "./styles";
import { Feather } from "@expo/vector-icons";

// Tipagem da navegação
type ExplorarScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Explorar"
>;

const suggestions = [
  {
    id: "1",
    image: require("../../../../assets/PostFeed/Rectangle 80.png"),
  },
  {
    id: "2",
    image: require("../../../../assets/PostFeed/image 86.png"),
  },
  {
    id: "3",
    image: require("../../../../assets/PostFeed/image 91.png"),
  },
  {
    id: "4",
    image: require("../../../../assets/PostFeed/Rectangle 80.png"),
  },
  {
    id: "5",
    image: require("../../../../assets/PostFeed/Rectangle 80.png"),
  },
  {
    id: "6",
    image: require("../../../../assets/PostFeed/Rectangle 80.png"),
  },
];

const Explorar = () => {
  const navigation = useNavigation<ExplorarScreenNavigationProp>();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styleExplorar.container}>
      {/* Header */}
      <View style={styleExplorar.headerDynamic}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../../../assets/icones/voltar.png")}
            style={styleExplorar.buttonTopVoltar}
          />
        </TouchableOpacity>

        <View style={styleExplorar.telaTituloCentro}>
          <Text style={styleExplorar.acimaTitulo}>DESCUBRA TUDO E TODOS</Text>
          <Text style={styleExplorar.titulo}>Explorar</Text>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styleExplorar.cardMain}
      >
        <View style={styleExplorar.inputBntContainer}>
          {/* Barra de Pesquisa */}
          <View style={styleExplorar.inputContainer}>
            <Feather name="search" size={18} color="#A9A9A9" />
            <TextInput
              style={styleExplorar.input}
              placeholder="Pesquise..."
              placeholderTextColor="#A0A0A0"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity>
            <Image
              source={require("../../../../assets/icones/tresPontos.png")}
              style={styleExplorar.buttonFiltro}
            />
          </TouchableOpacity>
        </View>

        {/* Sessão de Hashtags */}
        <View style={styleExplorar.cardPesquisar}>
          <Text style={styleExplorar.sectionTitle}>Tudo</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styleExplorar.sessaoHashtags}
          >
            <TouchableOpacity style={styleExplorar.hashtag}>
              <Text style={styleExplorar.hashtagText}>#Tecnologia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleExplorar.hashtag}>
              <Text style={styleExplorar.hashtagText}>#Ciência</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleExplorar.hashtag}>
              <Text style={styleExplorar.hashtagText}>#Esportes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleExplorar.hashtag}>
              <Text style={styleExplorar.hashtagText}>#Música</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Sessão For you */}
        <View style={styleExplorar.cardForYou}>
          {/* Card Post 1 */}
          <View style={styleExplorar.forYouSugestao}>
            <Image
              source={require("../../../../assets/PostFeed/Rectangle 80.png")}
              style={[styleExplorar.postImage, { aspectRatio: 1 }]} // Ajuste a proporção aqui
            />
          </View>

          {/* Card Post 2 */}
          <View style={styleExplorar.forYouSugestao}>
            <Image
              source={require("../../../../assets/PostFeed/image 86.png")}
              style={[styleExplorar.postImage, { aspectRatio: 1.5 }]} // Ajuste a proporção aqui
            />
          </View>

          {/* Card Post 3 */}
          <View style={styleExplorar.forYouSugestao}>
            <Image
              source={require("../../../../assets/PostFeed/image 91.png")}
              style={[styleExplorar.postImage, { aspectRatio: 1 }]} // Ajuste a proporção aqui
            />
          </View>

          {/* Card Post 4 */}
          <View style={styleExplorar.forYouSugestao}>
            <Image
              source={require("../../../../assets/PostFeed/image 86.png")}
              style={[styleExplorar.postImage, { aspectRatio: 1.5 }]} // Ajuste a proporção aqui
            />
          </View>
          {/* Card Post 5 */}
          <View style={styleExplorar.forYouSugestao}>
            <Image
              source={require("../../../../assets/PostFeed/Rectangle 80.png")}
              style={[styleExplorar.postImage, { aspectRatio: 1 }]} // Ajuste a proporção aqui
            />
          </View>
          {/* Card Post 6 */}
          <View style={styleExplorar.forYouSugestao}>
            <Image
              source={require("../../../../assets/PostFeed/image 91.png")}
              style={[styleExplorar.postImage, { aspectRatio: 1.5 }]} // Ajuste a proporção aqui
            />
          </View>

          {/* Card Post 7 */}
          <View style={styleExplorar.forYouSugestao}>
            <Image
              source={require("../../../../assets/PostFeed/image 86.png")}
              style={[styleExplorar.postImage, { aspectRatio: 1 }]} // Ajuste a proporção aqui
            />
          </View>
          {/* Card Post 8 */}
          <View style={styleExplorar.forYouSugestao}>
            <Image
              source={require("../../../../assets/PostFeed/Rectangle 80.png")}
              style={[styleExplorar.postImage, { aspectRatio: 1.5 }]} // Ajuste a proporção aqui
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Explorar;
