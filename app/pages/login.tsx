import FadeWrapper from "@/components/transitions/FadeWrapper";
import { router } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
// Importação do arquivo de estilos separado
import { styles } from "../../components/styles/login.styles";

export default function Login() {
  const [perfil, setPerfil] = useState<"cliente" | "integrador" | "ponto">("cliente");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Validação: obriga preencher todos os campos
  const isFormValid = email.trim() !== "" && senha.trim() !== "";

  const handleLogin = () => {
    if (!isFormValid) return;
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      router.replace("/tabs/recarga");
    }, 1500);
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

      <TextInput 
        style={styles.input} 
        placeholder="E-mail" 
        keyboardType="email-address" 
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