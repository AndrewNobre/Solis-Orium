import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import FadeWrapper from "@/components/transitions/FadeWrapper";
import { styles } from "@/components/styles/perfil.styles";

interface ProfileItemProps {
  icon: string;
  label: string;
  onPress?: () => void;
}

const ProfileItem = ({ icon, label, onPress }: ProfileItemProps) => (
  <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
    <View style={styles.iconWrapper}>
      <Ionicons name={icon as any} size={20} color="#000" />
    </View>
    <Text style={styles.itemText}>{label}</Text>
    <Ionicons name="chevron-forward" size={18} color="#ccc" />
  </TouchableOpacity>
);

export default function Perfil() {
  return (
    <FadeWrapper style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Seção: Mais informações */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mais informações</Text>
          <ProfileItem icon="person-outline" label="Meus dados" />
          <ProfileItem icon="help-circle-outline" label="Central de ajuda" />
          <ProfileItem icon="swap-horizontal-outline" label="Pedir limite" />
        </View>

        {/* Seção: Documentos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Documentos</Text>
          <ProfileItem icon="document-text-outline" label="Contrato" />
          <ProfileItem icon="shield-checkmark-outline" label="Políticas de privacidade" />
          <ProfileItem icon="receipt-outline" label="Comprovantes" />
          <ProfileItem icon="calculator-outline" label="Tarifas" />
        </View>

        {/* Seção: Institucional */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Institucional</Text>
          <ProfileItem icon="globe-outline" label="Site Solis Orium" />
          <ProfileItem icon="logo-instagram" label="Instagram" />
          <ProfileItem icon="star-outline" label="Avaliar app" />
          <ProfileItem 
            icon="log-out-outline" 
            label="Sair do aplicativo" 
            onPress={() => router.replace("/pages/login")} 
          />
        </View>

        

      </ScrollView>
    </FadeWrapper>
  );
}