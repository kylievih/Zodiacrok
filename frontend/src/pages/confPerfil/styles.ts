import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

// Obter a largura da tela para ajustes responsivos
const { width, height } = Dimensions.get("window");

export const styleConfPerfil = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingHorizontal: width * 0.03,
  },
  headerDynamic: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height * 0.05, // Ajuste conforme a altura da tela
    padding: width * 0.05, // Ajusta o padding proporcionalmente
    borderRadius: 10,
  },
  telaTituloCentro: {
    alignItems: "center",
    width: "95%",
    justifyContent: "center",
    borderRadius: 20,
    right: width * 0.02,
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
  buttonTop: {
    backgroundColor: "#D705F2",
    borderRadius: 50,
    alignItems: "center",
    padding: width * 0.015,
    width: height * 0.045,
    height: height * 0.045,
    right: width * 0.05,
    marginTop: 5,
    marginRight: 5,
  },
  cardConfPerfil: {
    width: "100%",
    flex: 1,
    padding: width * 0.05,
  },
  cabecalho: {
    width: "105%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconeTop: {
    width: width * 0.1,
    height: width * 0.06,
    resizeMode: "contain",
  },
  buttonTopVoltar: {
    width: width * 0.05,
    height: width * 0.05,
    resizeMode: "contain",
  },

  sectionTitleICON: {
    right: 40,
    fontSize: width * 0.06,
    fontWeight: "bold",
    color: "#A6A6A6",
  },

  cardCabecalho: {
    width: "100%",
    borderRadius: width * 0.06,
    padding: width * 0.06,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  headerPerfil: {
    borderRadius: 1000,
    justifyContent: "center",
    width: width * 1,
    height: height * 0.15,
    backgroundColor: "red",
  },
  headerPost: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: width * 0.1,
    width: width * 0.8,
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

  fundoEditarPerfil: {
    width: width * 1,
    height: width * 0.35,
  },
  titleICON: {
    color: "#fff",
    width: 100,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
