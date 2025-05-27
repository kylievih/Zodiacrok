import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: width * 0.05,
  },
  headerDynamic: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 75,
  },
  logo: {
    width: width * 0.45, // Ajustando dinamicamente com base na largura da tela
    height: height * 0.06,
    resizeMode: "contain",
    marginTop: height * 0.015,
  },
  slogan: {
    fontSize: width * 0.035,
    color: "#A9A9A9",
  },
  card: {
    width: width * 0.9, // Tornando responsivo
    maxWidth: 400, // Limitando para não ficar muito grande em telas grandes
    marginTop: height * 0.03,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: width * 0.06,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  title: {
    fontSize: width * 0.09, // Ajustando dinamicamente
    fontWeight: "bold",
    color: "#000",
    marginBottom: height * 0.03,
    marginTop: height * 0.03,
    shadowColor: "#FFFFFF",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 15,
    paddingHorizontal: width * 0.04,
    width: "90%",
    height: height * 0.06,
    marginBottom: height * 0.01,
  },
  inputText: {
    flex: 1,
    marginLeft: width * 0.03,
    fontSize: width * 0.04,
  },
  button: {
    backgroundColor: "#D705F2",
    width: "90%",
    height: height * 0.07,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.02,
    shadowColor: "#D705F2",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: width * 0.06,
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    color: "#A9A9A9",
    marginVertical: height * 0.015,
  },
  socialIcons: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    marginBottom: height * 0.02,
  },
  socialIconCircle: {
    width: width * 0.12,
    height: width * 0.12,
    backgroundColor: "#e3e3e3",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  boxBottom: {
    fontSize: width * 0.035,
    marginTop: height * 0.015,
    fontWeight: "500",
    width: "85%",
    backgroundColor: "#F2F2F2",
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    padding: width * 0.03,
  },

  policyText: {
    fontSize: width * 0.032,
    color: "#959595",
    textAlign: "center",
  },
  policyLink: {
    color: "#959595",
    fontWeight: "bold",
  },
  loginText: {
    fontSize: width * 0.04,
    color: "#A0A0A0",
    marginTop: 25,
    marginBottom: height * 0.03,
    paddingBottom: width * 0.04,
  },
  loginLink: {
    color: "#AB05F2",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: width * 0.04,
  },
});
