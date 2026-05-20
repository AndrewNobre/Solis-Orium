import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import FadeWrapper from "@/components/transitions/FadeWrapper";
// Importação do estilo separado
import { styles } from "../../components/styles/perfil.styles";

export default function Perfil() {
  return (
    <FadeWrapper style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>U</Text>
        </View>
        <Text style={styles.name}>Nome do Usuário</Text>
        <Text style={styles.email}>usuario@email.com</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={() => router.replace("../pages/login")}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </FadeWrapper>
  );
}