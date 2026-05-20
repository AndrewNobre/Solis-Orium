import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import FadeWrapper from "@/components/transitions/FadeWrapper";
// Importação do estilo
import { styles } from "../components/styles/index.styles";

export default function Welcome() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsAppLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isAppLoading) {
    return (
      <FadeWrapper style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#F59E0B" />
      </FadeWrapper>
    );
  }

  return (
    <FadeWrapper style={styles.container}>
      <View style={styles.brandContainer}>
        <View style={styles.iconCircle}>
          <Ionicons name="sunny" size={50} color="#F59E0B" />
        </View>
        <Text style={styles.brandName}>Solis Orium</Text>
        <Text style={styles.tagline}>
          Incentivando a Mobilidade Elétrica e a Energia Solar por Meio da Tecnologia
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.primaryButton} onPress={() => router.push("./pages/login")}>
          <Text style={styles.primaryButtonText}>Começar</Text>
        </TouchableOpacity>
      </View>
    </FadeWrapper>
  );
}