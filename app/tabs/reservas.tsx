import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FadeWrapper from "@/components/transitions/FadeWrapper";
import { styles } from "@/components/styles/reservas.styles";

const RESERVAS = [
  {
    id: "R-2026-0102",
    ponto: "Estacao Centro Sul",
    inicio: "20/05 19:00",
    fim: "20/05 20:10",
    status: "Agendada",
    valor: 42.8,
  },
  {
    id: "R-2026-0088",
    ponto: "Hub Solar Campinas",
    inicio: "18/05 08:30",
    fim: "18/05 09:20",
    status: "Finalizada",
    valor: 36.45,
  },
];

export default function Reservas() {
  return (
    <FadeWrapper style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Reservas e Pagamentos</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Nova reserva</Text>
          <Text style={styles.description}>Selecione veiculo, janela de horario e confirme o custo estimado.</Text>

          <View style={styles.fakeInputRow}>
            <Text style={styles.fakeLabel}>Veiculo</Text>
            <Text style={styles.fakeValue}>BYD Dolphin - ABC1D23</Text>
          </View>
          <View style={styles.fakeInputRow}>
            <Text style={styles.fakeLabel}>Horario</Text>
            <Text style={styles.fakeValue}>20/05 19:00 ate 20/05 20:10</Text>
          </View>
          <View style={styles.fakeInputRow}>
            <Text style={styles.fakeLabel}>Valor estimado</Text>
            <Text style={styles.value}>R$ 42,80</Text>
          </View>

          <TouchableOpacity style={styles.primaryButton}>
            <Ionicons name="qr-code" size={17} color="#ffffff" />
            <Text style={styles.primaryButtonText}>Confirmar e gerar QR Code</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Pagamento</Text>
          <View style={styles.paymentMethods}>
            <View style={[styles.methodChip, styles.methodChipActive]}>
              <Ionicons name="scan" size={16} color="#0f766e" />
              <Text style={styles.methodTextActive}>PIX</Text>
            </View>
            <View style={styles.methodChip}>
              <Ionicons name="card" size={16} color="#475569" />
              <Text style={styles.methodText}>Credito</Text>
            </View>
            <View style={styles.methodChip}>
              <Ionicons name="card-outline" size={16} color="#475569" />
              <Text style={styles.methodText}>Debito</Text>
            </View>
          </View>

          <View style={styles.receiptBox}>
            <Ionicons name="document-text" size={18} color="#0f766e" />
            <Text style={styles.receiptText}>Comprovante disponivel apos a conclusao da sessao.</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Historico</Text>
        {RESERVAS.map((reserva) => (
          <View key={reserva.id} style={styles.historyCard}>
            <View style={styles.historyTopRow}>
              <Text style={styles.historyPoint}>{reserva.ponto}</Text>
              <Text style={styles.historyStatus}>{reserva.status}</Text>
            </View>
            <Text style={styles.historyMeta}>{reserva.id}</Text>
            <Text style={styles.historyMeta}>{reserva.inicio} - {reserva.fim}</Text>
            <Text style={styles.historyValue}>R$ {reserva.valor.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>
    </FadeWrapper>
  );
}
