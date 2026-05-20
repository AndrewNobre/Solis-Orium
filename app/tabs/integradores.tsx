import React from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FadeWrapper from "@/components/transitions/FadeWrapper";
// Importação do estilo
import { styles } from "../../components/styles/integradores.styles";

const INTEGRADORES = Array.from({ length: 9 }).map((_, i) => ({
  id: i.toString(),
  nome: `Integrador Solar ${i + 1}`,
  preco: "R$ 20.000,00",
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
      </View>
      <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
    </TouchableOpacity>
  );

  return (
    <FadeWrapper style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Orçamento Solar</Text>
        
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#9ca3af" style={styles.searchIcon} />
          <TextInput 
            placeholder="Buscar integradores..." 
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