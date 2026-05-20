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
        <View style={styles.hero}>
          <View>
            <Text style={styles.heroName}>Joao Victor</Text>
            <Text style={styles.heroEmail}>joao@email.com</Text>
          </View>
          <View style={styles.roleBadge}>
            <Text style={styles.roleBadgeText}>Cliente</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conta e Veiculos</Text>
          <ProfileItem icon="person-outline" label="Meus dados" />
          <ProfileItem icon="car-outline" label="Meus veiculos eletricos" />
          <ProfileItem icon="refresh-outline" label="Recuperacao de senha" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Financeiro e Reservas</Text>
          <ProfileItem icon="calendar-outline" label="Historico de reservas" />
          <ProfileItem icon="wallet-outline" label="Historico financeiro" />
          <ProfileItem icon="receipt-outline" label="Comprovantes" />
          <ProfileItem icon="qr-code-outline" label="QR Codes de reservas" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Servicos e Suporte</Text>
          <ProfileItem icon="star-outline" label="Avaliacoes e comentarios" />
          <ProfileItem icon="help-circle-outline" label="Central de ajuda" />
          <ProfileItem icon="shield-checkmark-outline" label="Politica de privacidade" />
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