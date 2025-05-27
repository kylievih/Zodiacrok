import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const stylePerfil = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingHorizontal: width * 0.02,
  },
  headerDynamic: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height * 0.06, // 6% da altura da tela
    padding: width * 0.05, // 5% da largura da tela
    borderRadius: 10,
  },
  telaTituloCentro: {
    alignItems: "center",
    width: "95%",
    justifyContent: "center",
    borderRadius: 20,
    left: 15,
  },
  acimaTitulo: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#959595",
    textAlign: "center",
  },
  titulo: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  buttonTop: {
    backgroundColor: "#D705F2",
    borderRadius: 50,
    alignItems: "center",
    padding: 5,
    width: width * 0.09, // 9% da largura da tela
    height: width * 0.09, // 9% da largura da tela (para manter o formato redondo)
    right: width * 0.12, // Ajuste da posição horizontal
    marginTop: 5,
    marginRight: 5,
  },
  cardPerfil: {
    width: "100%",
    flex: 1,
  },
  cabecalho: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconeTop: {
    width: width * 0.1,
    height: height * 0.03,
    resizeMode: "contain",
  },
  buttonSubtitulo: {
    color: "#fff",
    width: width * 0.27, // 27% da largura da tela
    right: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  IconsTopSubt: {
    width: "20%",
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
  sectionBTNTitle: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    color: "#000",
  },
  sectionTitleICON: {
    right: width * 0.04, // Ajuste da posição horizontal
    fontSize: width * 0.06, // 6% da largura da tela
    fontWeight: "bold",
    color: "#000",
    padding: width * 0.03,
    width: width * 0.8,
  },
  tresPontos: {
    height: height * 0.02, // 2% da altura da tela
    left: width * 0.2, // Ajuste da posição horizontal
    resizeMode: "contain",
  },
  IconsTop: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    right: width * 0.13,
  },

  cardCabecalho: {
    width: "100%",
    borderRadius: 25,
    padding: width * 0.06,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  cardFeed: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },

  titleICON: {
    color: "#fff",
    width: width * 0.085,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  headerPerfil: {
    borderRadius: 1000,
    paddingLeft: width * 0.085,
    justifyContent: "center",
    width: width * 1,
    height: height * 0.15,
  },
  headerPost: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: width * 0.1,
    width: width * 0.8,
  },
  headerImageRokmoji: {
    width: width * 0.36,
    height: width * 0.36,
    right: width * 0.05,
    padding: width * 0.009,
    borderRadius: 10000,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  profileImage: {
    borderColor: "#A020F0",
    width: width * 0.35,
    height: width * 0.35,
    padding: 2,
    borderRadius: 1000000,
    borderWidth: 7,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImageRokmoji: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: 100000,
    borderWidth: 7,
    borderColor: "#78E5FD",
    resizeMode: "contain",
  },

  // Layout responsivo para "Post Pessoal"
  cardPost: {
    width: width * 1,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  post: {
    borderRadius: width * 1,
    margin: width * 0.01,
    justifyContent: "center",
  },
  postImage: {
    width: width * 0.3,
    height: undefined,
    borderRadius: width * 0.03,
  },
});
