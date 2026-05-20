import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface MapPonto {
  id: string;
  nome: string;
  latitude: number;
  longitude: number;
  status: "Disponivel" | "Em uso" | "Manutencao";
  potenciaKw: number;
  preco: number;
}

interface Props {
  pontos: MapPonto[];
  selectedId: string | null;
  onMarkerPress: (ponto: MapPonto) => void;
}

const statusColor: Record<MapPonto["status"], string> = {
  Disponivel: "#16a34a",
  "Em uso": "#ea580c",
  Manutencao: "#dc2626",
};

export default function RecargaMap({ pontos, selectedId, onMarkerPress }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="map-outline" size={18} color="#64748b" />
        <Text style={styles.headerText}>Mapa disponivel apenas em dispositivos moveis.</Text>
      </View>

      {pontos.map((ponto) => (
        <View
          key={ponto.id}
          style={[styles.row, selectedId === ponto.id && styles.rowSelected]}
        >
          <View style={[styles.dot, { backgroundColor: statusColor[ponto.status] }]} />
          <Text style={styles.name}>{ponto.nome}</Text>
          <Text style={styles.coords}>
            {ponto.latitude.toFixed(4)}, {ponto.longitude.toFixed(4)}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f5f9",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 12,
    paddingBottom: 8,
  },
  headerText: {
    fontSize: 12,
    color: "#64748b",
    fontStyle: "italic",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 6,
    gap: 8,
  },
  rowSelected: {
    backgroundColor: "#dcfce7",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  name: {
    flex: 1,
    fontSize: 12,
    color: "#334155",
    fontWeight: "600",
  },
  coords: {
    fontSize: 11,
    color: "#94a3b8",
    fontFamily: "monospace",
  },
});
