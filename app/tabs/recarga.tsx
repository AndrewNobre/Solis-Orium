import React, { useRef, useMemo, useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FadeWrapper from "@/components/transitions/FadeWrapper";
import RecargaMap, { MapPonto } from "@/components/RecargaMap";
import { styles } from "@/components/styles/recarga.styles";

type Conector = "CCS2" | "Tipo 2" | "CHAdeMO";
type Status = MapPonto["status"];

interface PontoRecarga extends MapPonto {
  distanciaKm: number;
  conector: Conector;
}

const PONTOS: PontoRecarga[] = [
  { id: "1", nome: "Estacao Centro Sul",    distanciaKm: 1.4, potenciaKw: 60, preco: 1.95, conector: "CCS2",    status: "Disponivel", latitude: -23.5505, longitude: -46.6333 },
  { id: "2", nome: "Hub Solar Campinas",    distanciaKm: 3.1, potenciaKw: 22, preco: 1.45, conector: "Tipo 2",  status: "Em uso",     latitude: -23.5308, longitude: -46.6395 },
  { id: "3", nome: "Eletro Park Norte",     distanciaKm: 4.8, potenciaKw: 50, preco: 1.85, conector: "CCS2",    status: "Disponivel", latitude: -23.5134, longitude: -46.6531 },
  { id: "4", nome: "Shopping Verde",        distanciaKm: 7.2, potenciaKw: 40, preco: 1.65, conector: "CHAdeMO", status: "Manutencao", latitude: -23.5620, longitude: -46.6558 },
  { id: "5", nome: "Condominio Solis Prime",distanciaKm: 9.6, potenciaKw: 11, preco: 1.20, conector: "Tipo 2",  status: "Disponivel", latitude: -23.5740, longitude: -46.6173 },
];

const statusColor: Record<Status, string> = {
  Disponivel: "#16a34a",
  "Em uso": "#ea580c",
  Manutencao: "#dc2626",
};

export default function Recarga() {
  const [busca, setBusca] = useState("");
  const [filtroConector, setFiltroConector] = useState<Conector | "Todos">("Todos");
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const listRef = useRef<FlatList>(null);

  const pontosFiltrados = useMemo(() => {
    return PONTOS.filter((ponto) => {
      const matchBusca = ponto.nome.toLowerCase().includes(busca.toLowerCase());
      const matchConector = filtroConector === "Todos" || ponto.conector === filtroConector;
      return matchBusca && matchConector;
    }).sort((a, b) => a.distanciaKm - b.distanciaKm);
  }, [busca, filtroConector]);

  const handleMarkerPress = (ponto: MapPonto) => {
    setSelecionado(ponto.id);
    const idx = pontosFiltrados.findIndex((p) => p.id === ponto.id);
    if (idx >= 0) listRef.current?.scrollToIndex({ index: idx, animated: true });
  };

  const handleCardPress = (ponto: PontoRecarga) => {
    setSelecionado(ponto.id);
  };

  return (
    <FadeWrapper style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Pontos de Recarga</Text>
        <Text style={styles.subtitle}>Disponibilidade em tempo real · Toque para navegar.</Text>
      </View>

      {/* Mapa */}
      <RecargaMap
        pontos={PONTOS}
        selectedId={selecionado}
        onMarkerPress={handleMarkerPress}
      />

      {/* Legenda de status */}
      <View style={styles.legendRow}>
        {(Object.entries(statusColor) as [Status, string][]).map(([label, color]) => (
          <View key={label} style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: color }]} />
            <Text style={styles.legendLabel}>{label}</Text>
          </View>
        ))}
      </View>

      {/* Busca + Filtros */}
      <View style={styles.controls}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#64748b" />
          <TextInput
            value={busca}
            onChangeText={setBusca}
            style={styles.searchInput}
            placeholder="Buscar estacao"
            placeholderTextColor="#94a3b8"
          />
        </View>
        <View style={styles.filterRow}>
          {(["Todos", "CCS2", "Tipo 2", "CHAdeMO"] as const).map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.filterPill, filtroConector === item && styles.filterPillActive]}
              onPress={() => setFiltroConector(item)}
            >
              <Text style={[styles.filterPillText, filtroConector === item && styles.filterPillTextActive]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Lista de postos */}
      <FlatList
        ref={listRef}
        data={pontosFiltrados}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        onScrollToIndexFailed={() => {}}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, selecionado === item.id && styles.cardSelected]}
            onPress={() => handleCardPress(item)}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.nome}</Text>
              <View style={styles.statusBadge}>
                <View style={[styles.statusDot, { backgroundColor: statusColor[item.status] }]} />
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>
            <View style={styles.metricsRow}>
              <Text style={styles.metric}>{item.distanciaKm.toFixed(1)} km</Text>
              <Text style={styles.metric}>{item.potenciaKw} kW</Text>
              <Text style={styles.metric}>R$ {item.preco.toFixed(2)}/kWh</Text>
            </View>
            <View style={styles.footerRow}>
              <Text style={styles.connector}>Conector: {item.conector}</Text>
              <Ionicons name="navigate" size={16} color="#0f766e" />
            </View>
          </TouchableOpacity>
        )}
      />
    </FadeWrapper>
  );
}
