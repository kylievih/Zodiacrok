import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styleChat = StyleSheet.create({
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
    justifyContent: "center",
    marginTop: height * 0.05,
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
    right: width * 0.015,
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
});
