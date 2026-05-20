import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import FadeWrapper from "@/components/transitions/FadeWrapper";
// Importação do ficheiro de estilos separado
import { styles } from "../../components/styles/cadastro.styles";

export default function Cadastro() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [perfil, setPerfil] = useState<"cliente" | "integrador" | "ponto">("cliente");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [documento, setDocumento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);

  // Lógica para libertar o botão de avançar de cada etapa
  const canProceed = () => {
    if (step === 1) return true;
    if (step === 2) return nome.trim() !== "" && email.trim() !== "";
    if (step === 3) return documento.trim() !== "";
    if (step === 4) return senha.trim() !== "" && confirmarSenha.trim() !== "" && senha === confirmarSenha;
    return false;
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else router.replace("/pages/login");
  };

  const handleCadastro = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.replace("/tabs/integradores");
    }, 1500);
  };

  // Cálculo da barra de progresso
  const progressPercent = (step / totalSteps) * 100;

  return (
    <FadeWrapper style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack} disabled={isLoading}>
        <Ionicons name="arrow-back" size={24} color="#111827" />
      </TouchableOpacity>

      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
      </View>

      <Text style={styles.title}>
        {step === 1 && "Escolha seu Perfil"}
        {step === 2 && "Dados Pessoais"}
        {step === 3 && "Documento"}
        {step === 4 && "Segurança"}
      </Text>

      <View style={styles.formContainer}>
        {step === 1 && (
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
        )}

        {step === 2 && (
          <>
            <TextInput style={styles.input} placeholder="Nome completo" value={nome} onChangeText={setNome} />
            <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
          </>
        )}

        {step === 3 && (
          <TextInput 
            style={styles.input} 
            placeholder={perfil === "cliente" ? "Digite seu CPF" : "Digite seu CNPJ"} 
            keyboardType="numeric" 
            value={documento} 
            onChangeText={setDocumento} 
          />
        )}

        {step === 4 && (
          <>
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
            <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry value={confirmarSenha} onChangeText={setConfirmarSenha} />
            {senha !== confirmarSenha && confirmarSenha !== "" && (
              <Text style={styles.errorText}>As palavras-passe não coincidem.</Text>
            )}
          </>
        )}
      </View>

      {step < totalSteps ? (
        <TouchableOpacity 
          style={[styles.button, !canProceed() && styles.buttonDisabled]} 
          onPress={handleNext}
          disabled={!canProceed()}
        >
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity 
          style={[styles.button, (!canProceed() || isLoading) && styles.buttonDisabled]} 
          onPress={handleCadastro}
          disabled={!canProceed() || isLoading}
        >
          {isLoading ? <ActivityIndicator color="#ffffff" /> : <Text style={styles.buttonText}>Cadastrar</Text>}
        </TouchableOpacity>
      )}
    </FadeWrapper>
  );
}