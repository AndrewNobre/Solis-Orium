import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

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

const REGION_INITIAL = {
  latitude: -23.5426,
  longitude: -46.6446,
  latitudeDelta: 0.09,
  longitudeDelta: 0.07,
};

export default function RecargaMap({ pontos, selectedId, onMarkerPress }: Props) {
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (!selectedId) return;
    const ponto = pontos.find((p) => p.id === selectedId);
    if (!ponto) return;
    mapRef.current?.animateToRegion(
      { latitude: ponto.latitude, longitude: ponto.longitude, latitudeDelta: 0.03, longitudeDelta: 0.03 },
      400,
    );
  }, [selectedId, pontos]);

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      initialRegion={REGION_INITIAL}
      showsUserLocation
      showsMyLocationButton={false}
    >
      {pontos.map((ponto) => (
        <Marker
          key={ponto.id}
          coordinate={{ latitude: ponto.latitude, longitude: ponto.longitude }}
          pinColor={statusColor[ponto.status]}
          onPress={() => onMarkerPress(ponto)}
        >
          <Callout tooltip>
            <View style={styles.callout}>
              <Text style={styles.calloutTitle}>{ponto.nome}</Text>
              <View style={styles.calloutRow}>
                <View style={[styles.calloutDot, { backgroundColor: statusColor[ponto.status] }]} />
                <Text style={styles.calloutStatus}>{ponto.status}</Text>
              </View>
              <Text style={styles.calloutMeta}>{ponto.potenciaKw} kW · R$ {ponto.preco.toFixed(2)}/kWh</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 230,
  },
  callout: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 12,
    minWidth: 180,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  calloutTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 4,
  },
  calloutRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 4,
  },
  calloutDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  calloutStatus: {
    fontSize: 11,
    color: "#475569",
    fontWeight: "600",
  },
  calloutMeta: {
    fontSize: 11,
    color: "#64748b",
  },
});
