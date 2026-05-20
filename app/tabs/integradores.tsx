import React from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FadeWrapper from "@/components/transitions/FadeWrapper";
import { styles } from "../../components/styles/integradores.styles";

const INTEGRADORES = Array.from({ length: 8 }).map((_, i) => ({
  id: i.toString(),
  nome: `Integrador Solar ${i + 1}`,
  avaliacao: (4.2 + (i % 4) * 0.2).toFixed(1),
  preco: `A partir de R$ ${(15000 + i * 2500).toLocaleString("pt-BR")}`,
  icon: i % 2 === 0 ? "leaf-outline" : "sunny-outline",
}));

export default function Integradores() {
  const renderItem = ({ item }: { item: typeof INTEGRADORES[0] }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons name={item.icon as any} size={24} color="#F59E0B" />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.integradorNome}>{item.nome}</Text>
        <Text style={styles.integradorPreco}>{item.preco}</Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={14} color="#f59e0b" />
          <Text style={styles.ratingText}>{item.avaliacao} de 5.0</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
    </TouchableOpacity>
  );

  return (
    <FadeWrapper style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Simulador Solar</Text>
        <View style={styles.simulatorCard}>
          <View style={styles.simulatorMainInfo}>
            <Text style={styles.simulatorValue}>R$ 412/mês</Text>
            <Text style={styles.simulatorSubtitle}>Economia estimada</Text>
          </View>
          <View style={styles.simulatorDivider} />
          <View style={styles.simulatorMainInfo}>
            <Text style={styles.simulatorValue}>4,8 anos</Text>
            <Text style={styles.simulatorSubtitle}>Retorno financeiro</Text>
          </View>
        </View>
        <View style={styles.suggestionBox}>
          <Ionicons name="flash-outline" size={18} color="#0f766e" />
          <Text style={styles.suggestionText}>Potencia sugerida: 5.2 kWp para consumo residencial urbano.</Text>
        </View>

        <Text style={styles.sectionTitle}>Marketplace de Integradores</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#9ca3af" style={styles.searchIcon} />
          <TextInput
            placeholder="Buscar por nome, cidade ou servico..."
            style={styles.searchInput}
            placeholderTextColor="#9ca3af"
          />
        </View>
      </View>

      <FlatList
        data={INTEGRADORES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </FadeWrapper>
  );
}