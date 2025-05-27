import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styleExplorar = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingHorizontal: width * 0.03, // Ajusta conforme a largura da tela
  },
  headerDynamic: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.05, // Adapta conforme a altura da tela
    padding: height * 0.02,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  buttonTopVoltar: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: "contain",
  },
  telaTituloCentro: {
    alignItems: "center",
    width: "95%",
    justifyContent: "center",
    borderRadius: 20,
    right: width * 0.018,
  },
  acimaTitulo: {
    fontSize: width * 0.02,
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
  cardMain: {
    width: "100%",
    flex: 1,
    marginTop: height * 0.02,
  },
  inputBntContainer: {
    flexDirection: "row",
    width: "100%",
  },
  buttonFiltro: {
    width: width * 0.05,
    height: width * 0.05,
    marginTop: height * 0.02,
    marginLeft: width * 0.02,
    resizeMode: "contain",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: width * 0.05,
    paddingHorizontal: width * 0.04,
    width: "90%",
    height: height * 0.06,
    marginBottom: height * 0.02,
  },
  input: {
    flex: 1,
    fontSize: width * 0.04,
    fontWeight: "bold",
    color: "#959595",
    paddingLeft: width * 0.02,
  },
  cardPesquisar: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: width * 0.06,
    padding: width * 0.02,
  },
  sectionTitle: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "#000",
    marginBottom: height * 0.015,
    marginLeft: width * 0.02,
  },
  sessaoHashtags: {
    paddingLeft: width * 0.02,
  },
  hashtag: {
    backgroundColor: "#FFFFFF",
    borderRadius: width * 0.03,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.04,
    marginRight: width * 0.02,
    borderWidth: 4,
    borderColor: "#F2F2F2",
  },
  hashtagText: {
    color: "#959595",
    fontSize: width * 0.035,
    fontWeight: "bold",
  },

  // Layout responsivo para "For You"
  cardForYou: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  forYouSugestao: {
    width: width * 0.3,
    borderRadius: width * 0.03,
    justifyContent: "center",
    marginBottom: height * 0.015,
  },
  postImage: {
    width: "100%",
    height: undefined,
    borderRadius: width * 0.03,
  },
});
