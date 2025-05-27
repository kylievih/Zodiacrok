import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

// Obter a largura e altura da tela para ajustes responsivos
const { width, height } = Dimensions.get("window");

export const styleNofificacao = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  headerDynamic: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height * 0.05, // Ajusta o topo com base na altura da tela
    padding: width * 0.05, // Ajusta o padding com base na largura da tela
    borderRadius: 10,
  },
  telaTituloCentro: {
    alignItems: "center",
    width: "95%",
    justifyContent: "center",
    borderRadius: 20,
    right: 7,
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
    padding: 5,
    width: height * 0.05,
    height: height * 0.05,
    marginTop: 5,
    marginRight: 5,
  },
  cardMain: {
    width: "100%",
    flex: 1,
    marginTop: height * 0.03,
  },

  iconeTop: {
    width: width * 0.1,
    height: height * 0.06,
    resizeMode: "contain",
  },
  buttonTopVoltar: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
