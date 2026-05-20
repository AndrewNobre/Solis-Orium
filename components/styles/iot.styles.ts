import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: {
    paddingTop: 58,
    paddingHorizontal: 20,
    paddingBottom: 96,
  },
  title: {
    fontSize: 26,
    color: "#0f172a",
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 6,
    color: "#64748b",
    fontSize: 13,
  },
  alertCard: {
    marginTop: 12,
    backgroundColor: "#fef2f2",
    borderColor: "#fecaca",
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  alertTextWrap: {
    flex: 1,
  },
  alertTitle: {
    color: "#7f1d1d",
    fontWeight: "700",
    fontSize: 13,
  },
  alertText: {
    color: "#991b1b",
    marginTop: 2,
    fontSize: 12,
    lineHeight: 18,
  },
  sectionTitle: {
    marginTop: 14,
    marginBottom: 8,
    color: "#0f172a",
    fontSize: 15,
    fontWeight: "700",
  },
  sensorCard: {
    backgroundColor: "#ffffff",
    borderColor: "#e2e8f0",
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
    marginBottom: 8,
  },
  sensorTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sensorId: {
    color: "#0f172a",
    fontSize: 14,
    fontWeight: "700",
  },
  sensorStatus: {
    color: "#0f766e",
    backgroundColor: "#ccfbf1",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    fontSize: 11,
    fontWeight: "700",
  },
  sensorMeta: {
    marginTop: 5,
    color: "#64748b",
    fontSize: 12,
  },
  metricRow: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  metric: {
    color: "#334155",
    fontSize: 12,
    fontWeight: "600",
  },
  logBox: {
    backgroundColor: "#0f172a",
    borderRadius: 14,
    padding: 12,
  },
  logLine: {
    color: "#e2e8f0",
    fontFamily: "monospace",
    fontSize: 11,
    marginBottom: 6,
  },
});
