import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importando a navegação
import { StackNavigationProp } from "@react-navigation/stack"; // Tipagem da navegação
import { RootStackParamList } from "../../routes/types"; // Importando o tipo das rotas
import { styleHome } from "../home/styles";

// Definindo o tipo de navegação para a tela Home
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const stories = [
  {
    id: 1,
    name: "Seu story",
    image: require("../../../../assets/imagensExemplos/glauber.png"),
  },
  {
    id: 2,
    name: "",
    image: require("../../../../assets/imagensExemplos/image 14.png"),
  },
  {
    id: 3,
    name: "",
    image: require("../../../../assets/imagensExemplos/image 18.png"),
  },
  {
    id: 4,
    name: "",
    image: require("../../../../assets/imagensExemplos/image 19.png"),
  },
  {
    id: 5,
    name: "",
    image: require("../../../../assets/imagensExemplos/image 21.png"),
  },
  {
    id: 6,
    name: "",
    image: require("../../../../assets/imagensExemplos/image 16.png"),
  },
  {
    id: 7,
    name: "",
    image: require("../../../../assets/imagensExemplos/image 17.png"),
  },
];

export default function Home() {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const navigation = useNavigation<HomeScreenNavigationProp>(); // Tipando a navegação

  return (
    <View style={styleHome.container}>
      {/* Header */}
      <View style={styleHome.headerDynamic}>
        <TouchableOpacity style={styleHome.buttonTop}>
          <Image
            source={require("../../../../assets/icones/CriarBranco 1.png")}
            style={styleHome.iconeTopCriar}
          />
        </TouchableOpacity>

        <Image
          source={require("../../../../assets/logoSOLO.png")}
          style={styleHome.logo}
        />

        <View style={styleHome.IconsTop}>
          {/* Botão de Pesquisa */}
          <TouchableOpacity onPress={() => navigation.navigate("Explorar")}>
            <Image
              source={require("../../../../assets/icones/Lupa 1.png")}
              style={styleHome.iconeTop}
            />
          </TouchableOpacity>

          {/* Botão de Notificações */}
          <TouchableOpacity onPress={() => navigation.navigate("Notificacoes")}>
            <Image
              source={require("../../../../assets/icones/SinoNotf.png")}
              style={styleHome.iconeTop}
            />
          </TouchableOpacity>

          {/* Botão de Chat */}
          <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
            <Image
              source={require("../../../../assets/icones/Mensagem 1.png")}
              style={styleHome.iconeTop}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styleHome.cardMain}
      >
        {/* Stories Section */}
        <View style={styleHome.cardStories}>
          <View style={styleHome.cabecalho}>
            <Text style={styleHome.sectionTitle}>Stories</Text>
            <TouchableOpacity style={styleHome.buttonSubtitulo}>
              <Image
                source={require("../../../../assets/icones/VerTodosStories 1.png")}
                style={styleHome.iconeSubtitulo}
              />
              <Text style={styleHome.sectionBTNTitle}>Ver todos</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styleHome.sessaoStories}
          >
            {stories.map((story) => (
              <TouchableOpacity
                key={story.id}
                style={[
                  styleHome.clickableStory,
                  selectedStory === story.id ? styleHome.selectedStory : {},
                ]}
                onPress={() => setSelectedStory(story.id)}
              >
                <Image source={story.image} style={styleHome.story} />
                {selectedStory === story.id && (
                  <View style={styleHome.gradientBorder} />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Feed Section */}
        <View style={styleHome.cardCabecalho}>
          <View style={styleHome.cabecalho}>
            <View style={styleHome.titleICON}>
              <Text style={styleHome.sectionTitleICON}>Feed</Text>
              <Image
                source={require("../../../../assets/Menu/feed.png")}
                style={styleHome.logoPaginaTitulo}
              />
            </View>
            <TouchableOpacity style={styleHome.buttonSubtitulo}>
              <Image
                source={require("../../../../assets/icones/tresPontos.png")}
                style={styleHome.tresPontos}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Post Feed Cards */}
        <View style={styleHome.cardFeed}>
          {/* Card Post 1 */}
          <View style={styleHome.cardPost}>
            <View style={styleHome.headerPost}>
              <Image
                source={require("../../../../assets/imagensExemplos/image 14.png")}
                style={styleHome.profileImage}
              />
              <View style={styleHome.infoPost}>
                <Text style={styleHome.name}>Cris Almeida 1</Text>
                <View style={styleHome.infoPostUserTime}>
                  <Text style={styleHome.username}>@Cris</Text>
                  <Text style={styleHome.time}> • 1s</Text>
                </View>
              </View>
            </View>
            <Image
              source={require("../../../../assets/PostFeed/Rectangle 80.png")}
              style={styleHome.postImage} // Ajuste a proporção aqui
            />
            <View style={styleHome.footerPost}>
              <View style={styleHome.footerLikeComent}>
                <View style={styleHome.btnLike}>
                  <Image
                    source={require("../../../../assets/icones/IconReacaoEstrela 11.png")}
                    style={styleHome.iconStyle}
                  />
                  <Text style={styleHome.likes}>1.5k</Text>
                </View>

                <View style={styleHome.btnComentario}>
                  <Image
                    source={require("../../../../assets/icones/IconComentario 11.png")}
                    style={styleHome.iconStyle}
                  />
                  <Text style={styleHome.comments}>45</Text>
                </View>
              </View>
              <View style={styleHome.btnCompartilhar}>
                <Image
                  source={require("../../../../assets/icones/IconCompartilhar 11.png")}
                  style={styleHome.iconStyle}
                />
              </View>
            </View>
          </View>

          {/* Card Post 2 */}
          <View style={styleHome.cardPost}>
            <View style={styleHome.headerPost}>
              <Image
                source={require("../../../../assets/imagensExemplos/image 21.png")}
                style={styleHome.profileImage}
              />
              <View style={styleHome.infoPost}>
                <Text style={styleHome.name}>Junior 2</Text>
                <View style={styleHome.infoPostUserTime}>
                  <Text style={styleHome.username}>@junior</Text>
                  <Text style={styleHome.time}> • 1s</Text>
                </View>
              </View>
            </View>
            <Image
              source={require("../../../../assets/PostFeed/image 86.png")}
              style={styleHome.postImage} // Ajuste a proporção aqui
            />
            <View style={styleHome.footerPost}>
              <View style={styleHome.footerLikeComent}>
                <View style={styleHome.btnLike}>
                  <Image
                    source={require("../../../../assets/icones/IconReacaoEstrela 11.png")}
                    style={styleHome.iconStyle}
                  />
                  <Text style={styleHome.likes}>1.5k</Text>
                </View>

                <View style={styleHome.btnComentario}>
                  <Image
                    source={require("../../../../assets/icones/IconComentario 11.png")}
                    style={styleHome.iconStyle}
                  />
                  <Text style={styleHome.comments}>45</Text>
                </View>
              </View>
              <View style={styleHome.btnCompartilhar}>
                <Image
                  source={require("../../../../assets/icones/IconCompartilhar 11.png")}
                  style={styleHome.iconStyle}
                />
              </View>
            </View>
          </View>

          {/* Card Post 3 */}
          <View style={styleHome.cardPost}>
            <View style={styleHome.headerPost}>
              <Image
                source={require("../../../../assets/imagensExemplos/image 16.png")}
                style={styleHome.profileImage}
              />
              <View style={styleHome.infoPost}>
                <Text style={styleHome.name}>Everton</Text>
                <View style={styleHome.infoPostUserTime}>
                  <Text style={styleHome.username}>@Everton</Text>
                  <Text style={styleHome.time}> • 1s</Text>
                </View>
              </View>
            </View>
            <Image
              source={require("../../../../assets/PostFeed/image 86.png")}
              style={styleHome.postImage} // Ajuste a proporção aqui
            />
            <View style={styleHome.footerPost}>
              <View style={styleHome.footerLikeComent}>
                <View style={styleHome.btnLike}>
                  <Image
                    source={require("../../../../assets/icones/IconReacaoEstrela 11.png")}
                    style={styleHome.iconStyle}
                  />
                  <Text style={styleHome.likes}>1.5k</Text>
                </View>

                <View style={styleHome.btnComentario}>
                  <Image
                    source={require("../../../../assets/icones/IconComentario 11.png")}
                    style={styleHome.iconStyle}
                  />
                  <Text style={styleHome.comments}>45</Text>
                </View>
              </View>
              <View style={styleHome.btnCompartilhar}>
                <Image
                  source={require("../../../../assets/icones/IconCompartilhar 11.png")}
                  style={styleHome.iconStyle}
                />
              </View>
            </View>
          </View>

          {/* Card Post 4 */}
          <View style={styleHome.cardPost}>
            <View style={styleHome.headerPost}>
              <Image
                source={require("../../../../assets/imagensExemplos/image 17.png")}
                style={styleHome.profileImage}
              />
              <View style={styleHome.infoPost}>
                <Text style={styleHome.name}>Alan</Text>
                <View style={styleHome.infoPostUserTime}>
                  <Text style={styleHome.username}>@alan</Text>
                  <Text style={styleHome.time}> • 1s</Text>
                </View>
              </View>
            </View>
            <Image
              source={require("../../../../assets/PostFeed/image 91.png")}
              style={styleHome.postImage} // Ajuste a proporção aqui
            />
            <View style={styleHome.footerPost}>
              <View style={styleHome.footerLikeComent}>
                <View style={styleHome.btnLike}>
                  <Image
                    source={require("../../../../assets/icones/IconReacaoEstrela 11.png")}
                    style={styleHome.iconStyle}
                  />
                  <Text style={styleHome.likes}>1.5k</Text>
                </View>

                <View style={styleHome.btnComentario}>
                  <Image
                    source={require("../../../../assets/icones/IconComentario 11.png")}
                    style={styleHome.iconStyle}
                  />
                  <Text style={styleHome.comments}>45</Text>
                </View>
              </View>
              <View style={styleHome.btnCompartilhar}>
                <Image
                  source={require("../../../../assets/icones/IconCompartilhar 11.png")}
                  style={styleHome.iconStyle}
                />
              </View>
            </View>
          </View>

          {/* Card Post SUGESTÃO */}
          <View style={styleHome.cardPostSUGESTAO}>
            <View style={styleHome.infoPostSUGESTAO}>
              <View>
                <Text style={styleHome.quemSeguir}>Quem Seguir</Text>
                <Text style={styleHome.sugestãoYOU}>Sugestão pra você</Text>
              </View>
              <View>
                <Image
                  source={require("../../../../assets/icones/vermais.png")}
                  style={styleHome.saibaMaisSUGESTAO}
                />
              </View>
            </View>
            <View style={styleHome.headerPostSUGESTAO}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styleHome.sessaoSUGESTAO}
              >
                <View style={styleHome.perfilSUGESTAO}>
                  <Image
                    source={require("../../../../assets/imagensExemplos/image 47.png")}
                    style={styleHome.profileImageSUGESTAO}
                  />
                  <View style={styleHome.infoUserSUGESTAO}>
                    <Text style={styleHome.nameSUGESTAO}>Maria eduarda</Text>
                    <Text style={styleHome.usernameSUGESTAO}>@alan</Text>
                  </View>
                  <TouchableOpacity style={styleHome.buttonSUGESTAO}>
                    <Text style={styleHome.buttonTextSUGESTAO}>Seguir</Text>
                  </TouchableOpacity>
                </View>

                <View style={styleHome.perfilSUGESTAO}>
                  <Image
                    source={require("../../../../assets/imagensExemplos/image 47.png")}
                    style={styleHome.profileImageSUGESTAO}
                  />
                  <View style={styleHome.infoUserSUGESTAO}>
                    <Text style={styleHome.nameSUGESTAO}>Maria</Text>
                    <Text style={styleHome.usernameSUGESTAO}>@alan</Text>
                  </View>
                  <TouchableOpacity style={styleHome.buttonSUGESTAO}>
                    <Text style={styleHome.buttonTextSUGESTAO}>Seguir</Text>
                  </TouchableOpacity>
                </View>
                <View style={styleHome.perfilSUGESTAO}>
                  <Image
                    source={require("../../../../assets/imagensExemplos/image 47.png")}
                    style={styleHome.profileImageSUGESTAO}
                  />
                  <View style={styleHome.infoUserSUGESTAO}>
                    <Text style={styleHome.nameSUGESTAO}>Maria eduarda</Text>
                    <Text style={styleHome.usernameSUGESTAO}>@alan</Text>
                  </View>
                  <TouchableOpacity style={styleHome.buttonSUGESTAO}>
                    <Text style={styleHome.buttonTextSUGESTAO}>Seguir</Text>
                  </TouchableOpacity>
                </View>
                <View style={styleHome.perfilSUGESTAO}>
                  <Image
                    source={require("../../../../assets/imagensExemplos/image 47.png")}
                    style={styleHome.profileImageSUGESTAO}
                  />
                  <View style={styleHome.infoUserSUGESTAO}>
                    <Text style={styleHome.nameSUGESTAO}>Maria eduarda</Text>
                    <Text style={styleHome.usernameSUGESTAO}>@alan</Text>
                  </View>
                  <TouchableOpacity style={styleHome.buttonSUGESTAO}>
                    <Text style={styleHome.buttonTextSUGESTAO}>Seguir</Text>
                  </TouchableOpacity>
                </View>
                <View style={styleHome.perfilSUGESTAO}>
                  <Image
                    source={require("../../../../assets/imagensExemplos/image 47.png")}
                    style={styleHome.profileImageSUGESTAO}
                  />
                  <View style={styleHome.infoUserSUGESTAO}>
                    <Text style={styleHome.nameSUGESTAO}>Maria eduarda</Text>
                    <Text style={styleHome.usernameSUGESTAO}>@alan</Text>
                  </View>
                  <TouchableOpacity style={styleHome.buttonSUGESTAO}>
                    <Text style={styleHome.buttonTextSUGESTAO}>Seguir</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
