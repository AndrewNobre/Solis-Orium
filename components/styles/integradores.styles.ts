import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 14,
  },
  simulatorCard: {
    backgroundColor: "#0f766e",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  simulatorMainInfo: {
    flex: 1,
  },
  simulatorValue: {
    color: "#ffffff",
    fontSize: 21,
    fontWeight: "700",
  },
  simulatorSubtitle: {
    color: "#ccfbf1",
    marginTop: 3,
    fontSize: 12,
  },
  simulatorDivider: {
    width: 1,
    alignSelf: "stretch",
    backgroundColor: "rgba(255,255,255,0.28)",
    marginHorizontal: 14,
  },
  suggestionBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#ecfeff",
    borderColor: "#99f6e4",
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    gap: 8,
  },
  suggestionText: {
    color: "#155e75",
    fontSize: 13,
    flex: 1,
    lineHeight: 18,
  },
  sectionTitle: {
    fontSize: 16,
    color: "#0f172a",
    fontWeight: "700",
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FEF3C7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  integradorNome: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  integradorPreco: {
    fontSize: 14,
    color: "#4b5563",
    marginTop: 2,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    gap: 5,
  },
  ratingText: {
    fontSize: 12,
    color: "#475569",
    fontWeight: "600",
  },
});