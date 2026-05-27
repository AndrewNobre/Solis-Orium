import FadeWrapper from "@/components/transitions/FadeWrapper";
import { router } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
// Importação do arquivo de estilos separado
import { styles } from "../../components/styles/login.styles";
// Importando nossa API
import { DatabaseAPI } from "../../database/api";

export default function Login() {
  const [perfil, setPerfil] = useState<"cliente" | "integrador" | "ponto">("cliente");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cnpj, setCnpj] = useState(""); // Novo estado para CNPJ

  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState(""); // Estado para mensagem de erro

  // Validação: se for cliente não precisa de CNPJ, se for empresa, precisa.
  const isFormValid = perfil === "cliente"
    ? email.trim() !== "" && senha.trim() !== ""
    : email.trim() !== "" && senha.trim() !== "" && cnpj.trim() !== "";

  const handleLogin = async () => {
    if (!isFormValid) return;
    setIsLoading(true);
    setErro(""); // Limpa os erros anteriores

    // Chama a nossa API Falsa validando os dados
    const resposta = await DatabaseAPI.login(perfil, email, senha, cnpj);

    setIsLoading(false);

    if (resposta.success) {
      router.replace("/tabs/recarga");
    } else {
      // Mostra a mensagem se errar a senha ou o CNPJ
      setErro(resposta.message ?? "Erro desconhecido ao fazer login.");
    }
  };

  return (
    <FadeWrapper style={styles.container}>
      <Text style={styles.title}>Entrar</Text>

      <View style={styles.selectorContainer}>
        <TouchableOpacity style={[styles.selectorButton, perfil === "cliente" && styles.activeSelector]} onPress={() => setPerfil("cliente")}>
          <Text style={[styles.selectorText, perfil === "cliente" && styles.activeSelectorText]}>Cliente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.selectorButton, perfil === "integrador" && styles.activeSelector]} onPress={() => setPerfil("integrador")}>
          <Text style={[styles.selectorText, perfil === "integrador" && styles.activeSelectorText]}>Integrador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.selectorButton, perfil === "ponto" && styles.activeSelector]} onPress={() => setPerfil("ponto")}>
          <Text style={[styles.selectorText, perfil === "ponto" && styles.activeSelectorText]}>Ponto</Text>
        </TouchableOpacity>
      </View>

      {/* Exibição de Erro no Login */}
      {erro !== "" && (
        <Text style={{ color: "#dc2626", marginBottom: 12, textAlign: "center", fontWeight: "bold" }}>
          {erro}
        </Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Usuário ou Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Condicional: Input de CNPJ só renderiza para empresas e pontos */}
      {perfil !== "cliente" && (
        <TextInput
          style={styles.input}
          placeholder="CNPJ"
          keyboardType="numeric"
          value={cnpj}
          onChangeText={setCnpj}
        />
      )}

      <TouchableOpacity
        style={[styles.button, (!isFormValid || isLoading) && styles.buttonDisabled]}
        onPress={handleLogin}
        disabled={!isFormValid || isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>Entrar como {perfil}</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={() => router.push("/pages/cadastro")} disabled={isLoading}>
        <Text style={styles.linkText}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </FadeWrapper>
  );
}