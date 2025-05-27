import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import Logo from "../../../../assets/logo.png";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// Definir os tipos dos estados
interface FormData {
  name: string;
  username: string;
  email: string;
  confirmEmail: string;
  password: string;
}

export default function Cadastro() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [showPassword, setShowPassword] = useState(false);

  // Inicializando os estados com valores vazios
  const [formData, setFormData] = useState<FormData>({
    name: "",
    username: "",
    email: "",
    confirmEmail: "",
    password: "",
  });

  // Função de validação do formulário
  const validateForm = (): boolean => {
    const { name, username, email, confirmEmail, password } = formData;

    if (!name || !username || !email || !confirmEmail || !password) {
      Alert.alert("Erro", "Todos os campos são obrigatórios!");
      return false;
    }

    // Verificar se os e-mails coincidem
    if (email !== confirmEmail) {
      Alert.alert("Erro", "Os e-mails não coincidem!");
      return false;
    }

    // Verificar se a senha é forte (pelo menos 6 caracteres)
    if (password.length < 6) {
      Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres!");
      return false;
    }

    return true;
  };

  // Função que será chamada ao pressionar o botão Criar
  async function CreateAccount() {
    if (validateForm()) {
      // Se a validação passar, você pode continuar com a criação da conta
      Alert.alert("Sucesso", "Conta criada com sucesso!");
      // Aqui você pode redirecionar ou fazer a chamada para o back-end
      navigation.reset({ routes: [{ name: "BottomRoutes" }] });
    }
  }

  // Função para atualizar os valores do formulário
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerDynamic}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.slogan}>Hoje eu aprendi uma coisa nova</Text>
        </View>

        {/* Formulário de Cadastro */}
        <View style={styles.card}>
          <Text style={styles.title}>Cadastrar</Text>

          <View style={styles.inputContainer}>
            <Feather name="user" size={18} color="#A9A9A9" />
            <TextInput
              value={formData.name}
              onChangeText={(text) => handleInputChange("name", text)}
              placeholder="Nome Completo"
              style={styles.inputText}
            />
          </View>

          <View style={styles.inputContainer}>
            <Feather name="at-sign" size={18} color="#A9A9A9" />
            <TextInput
              value={formData.username}
              onChangeText={(text) => handleInputChange("username", text)}
              placeholder="Usuário"
              style={styles.inputText}
            />
          </View>

          <View style={styles.inputContainer}>
            <Feather name="mail" size={18} color="#A9A9A9" />
            <TextInput
              value={formData.email}
              onChangeText={(text) => handleInputChange("email", text)}
              placeholder="E-mail"
              style={styles.inputText}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Feather name="mail" size={18} color="#A9A9A9" />
            <TextInput
              value={formData.confirmEmail}
              onChangeText={(text) => handleInputChange("confirmEmail", text)}
              placeholder="Confirmar E-mail"
              style={styles.inputText}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Feather name="lock" size={18} color="#A9A9A9" />
            <TextInput
              value={formData.password}
              onChangeText={(text) => handleInputChange("password", text)}
              placeholder="Senha"
              style={styles.inputText}
              secureTextEntry={!showPassword}
            />
            <FontAwesome
              name={showPassword ? "eye" : "eye-slash"}
              size={18}
              color="#A0A0A0"
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>

          {/* Botão Criar */}
          <TouchableOpacity style={styles.button} onPress={CreateAccount}>
            <Text style={styles.buttonText}>Criar</Text>
          </TouchableOpacity>

          {/* Alternativa de Login com Redes Sociais */}
          <Text style={styles.orText}>ou</Text>
          <View style={styles.socialIcons}>
            <View style={styles.socialIconCircle}>
              <FontAwesome name="facebook" size={30} color="#949494" />
            </View>

            <View style={styles.socialIconCircle}>
              <FontAwesome name="github" size={30} color="#949494" />
            </View>
            <View style={styles.socialIconCircle}>
              <FontAwesome name="google" size={30} color="#949494" />
            </View>
          </View>

          <View style={styles.boxBottom}>
            {/* Termos e Políticas */}
            <TouchableOpacity>
              <Text style={styles.policyText}>
                Ao se cadastrar, você concorda com nossos{" "}
                <Text style={styles.policyLink}>
                  Termos, Política de Dados e Política de Cookies
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Link para Login */}
        <Text style={styles.loginText}>
          Já tenho uma conta{" "}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate("Login")}
          >
            Entrar agora
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
