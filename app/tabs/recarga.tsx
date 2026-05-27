import React, { useRef, useMemo, useState, useEffect } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FadeWrapper from "@/components/transitions/FadeWrapper";
import RecargaMap, { MapPonto } from "@/components/RecargaMap";
import { styles } from "@/components/styles/recarga.styles";
import { DatabaseAPI } from "../../database/api";

type Conector = "CCS2" | "Tipo 2" | "CHAdeMO";
type Status = MapPonto["status"];

interface PontoRecarga extends MapPonto {
  distanciaKm: number;
  conector: Conector;
}

const statusColor: Record<Status, string> = {
  Disponivel: "#16a34a",
  "Em uso": "#ea580c",
  Manutencao: "#dc2626",
};

export default function Recarga() {
  const [busca, setBusca] = useState("");
  const [filtroConector, setFiltroConector] = useState<Conector | "Todos">("Todos");
  const [selecionado, setSelecionado] = useState<string | null>(null);
  
  // Novos estados para o banco de dados
  const [pontosDB, setPontosDB] = useState<PontoRecarga[]>([]);
  const [carregando, setCarregando] = useState(true);
  
  const listRef = useRef<FlatList<PontoRecarga>>(null);

  // Busca os dados da API simulada ao abrir a aba
  useEffect(() => {
    async function carregarDados() {
      const dados = await DatabaseAPI.getPontosRecarga();
      setPontosDB(dados as PontoRecarga[]);
      setCarregando(false);
    }
    carregarDados();
  }, []);

  // Usa os dados que vieram do BD (pontosDB) em vez da lista fixa
  const pontosFiltrados = useMemo(() => {
    return pontosDB.filter((ponto) => {
      const matchBusca = ponto.nome.toLowerCase().includes(busca.toLowerCase());
      const matchConector = filtroConector === "Todos" || ponto.conector === filtroConector;
      return matchBusca && matchConector;
    }).sort((a, b) => a.distanciaKm - b.distanciaKm);
  }, [busca, filtroConector, pontosDB]);

  const handleMarkerPress = (ponto: MapPonto) => {
    setSelecionado(ponto.id);
    const idx = pontosFiltrados.findIndex((p) => p.id === ponto.id);
    if (idx >= 0) listRef.current?.scrollToIndex({ index: idx, animated: true });
  };

  const handleCardPress = (ponto: PontoRecarga) => {
    setSelecionado(ponto.id);
  };

  // Mostra um spinner enquanto baixa os dados
  if (carregando) {
    return (
      <FadeWrapper style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#0f766e" />
        <Text style={{ marginTop: 12, color: "#64748b" }}>Buscando estações...</Text>
      </FadeWrapper>
    );
  }

  return (
    <FadeWrapper style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Pontos de Recarga</Text>
        <Text style={styles.subtitle}>Disponibilidade em tempo real · Toque para navegar.</Text>
      </View>

      {/* Mapa */}
      <RecargaMap
        pontos={pontosDB}
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
        keyExtractor={(item: PontoRecarga) => item.id}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        onScrollToIndexFailed={() => { }}
        renderItem={({ item }: { item: PontoRecarga }) => (
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