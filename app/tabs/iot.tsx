import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FadeWrapper from "@/components/transitions/FadeWrapper";
import { styles } from "@/components/styles/iot.styles";

const SENSORES = [
  { id: "S-001", ponto: "Centro Sul", bateria: 82, latencia: "2.3s", status: "Operacional" },
  { id: "S-002", ponto: "Hub Campinas", bateria: 49, latencia: "4.1s", status: "Atencao" },
  { id: "S-003", ponto: "Shopping Verde", bateria: 16, latencia: "5.4s", status: "Falha" },
];

const LOGS = [
  "20:03 - S-003 sem comunicacao por 40s",
  "19:55 - S-002 variacao de leitura acima do limiar",
  "19:42 - S-001 online com nova medicao de energia",
];

export default function Iot() {
  return (
    <FadeWrapper style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Painel IoT</Text>
        <Text style={styles.subtitle}>Monitoramento de sensores e estado operacional dos carregadores.</Text>

        <View style={styles.alertCard}>
          <Ionicons name="alert-circle" size={20} color="#b91c1c" />
          <View style={styles.alertTextWrap}>
            <Text style={styles.alertTitle}>Falha detectada automaticamente</Text>
            <Text style={styles.alertText}>Sensor S-003 acima da latencia maxima de 5s (RNF016).</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Status dos sensores</Text>
        {SENSORES.map((sensor) => (
          <View key={sensor.id} style={styles.sensorCard}>
            <View style={styles.sensorTopRow}>
              <Text style={styles.sensorId}>{sensor.id}</Text>
              <Text style={styles.sensorStatus}>{sensor.status}</Text>
            </View>
            <Text style={styles.sensorMeta}>Ponto: {sensor.ponto}</Text>
            <View style={styles.metricRow}>
              <Text style={styles.metric}>Bateria: {sensor.bateria}%</Text>
              <Text style={styles.metric}>Latencia: {sensor.latencia}</Text>
            </View>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Historico de leituras (auditoria)</Text>
        <View style={styles.logBox}>
          {LOGS.map((log) => (
            <Text style={styles.logLine} key={log}>
              {log}
            </Text>
          ))}
        </View>
      </ScrollView>
    </FadeWrapper>
  );
}
