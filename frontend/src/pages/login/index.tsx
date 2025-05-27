import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { style } from "./styles";
import Logo from "../../../../assets/logo.png";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function getLogin() {
    // Verificando se os campos estão preenchidos
    if (!username || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos!");
      return;
    }
    // Lógica de login (essa parte pode ser substituída por uma chamada à API)
    navigation.reset({ routes: [{ name: "BottomRoutes" }] });
  }

  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.headerDynamic}>
          <Image source={Logo} style={style.logo} />
          <Text style={style.slogan}>Hoje eu aprendi uma coisa nova</Text>
        </View>

        <View style={style.card}>
          <Text style={style.title}>Conecta-se</Text>

          <View style={style.inputContainer}>
            <Feather name="at-sign" size={18} color="#A9A9A9" />
            <TextInput
              style={style.input}
              placeholder="Usuário"
              placeholderTextColor="#A0A0A0"
              value={username}
              onChangeText={setUsername}
            />
          </View>

          <View style={style.inputContainer}>
            <Feather name="lock" size={18} color="#A9A9A9" />
            <TextInput
              style={style.input}
              placeholder="Senha"
              placeholderTextColor="#A0A0A0"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <FontAwesome
              name={showPassword ? "eye" : "eye-slash"}
              size={18}
              color="#A0A0A0"
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>

          <TouchableOpacity style={style.button} onPress={getLogin}>
            <Text style={style.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <Text style={style.orText}>ou</Text>

          <View style={style.socialIcons}>
            <View style={style.socialIconCircle}>
              <FontAwesome name="facebook" size={30} color="#949494" />
            </View>

            <View style={style.socialIconCircle}>
              <FontAwesome name="github" size={30} color="#949494" />
            </View>
            <View style={style.socialIconCircle}>
              <FontAwesome name="google" size={30} color="#949494" />
            </View>
          </View>

          <View style={style.boxBottom}>
            <TouchableOpacity>
              <Text style={style.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={style.registerText}>
          Não tem uma conta?{" "}
          <Text
            style={style.registerLink}
            onPress={() => navigation.navigate("Cadastro")}
          >
            Criar a sua agora
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
