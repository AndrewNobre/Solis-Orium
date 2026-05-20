import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  scrollContent: {
    paddingBottom: 96,
  },
  hero: {
    marginTop: 58,
    marginHorizontal: 20,
    backgroundColor: "#0f172a",
    borderRadius: 18,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heroName: {
    color: "#f8fafc",
    fontSize: 18,
    fontWeight: "700",
  },
  heroEmail: {
    color: "#cbd5e1",
    marginTop: 2,
    fontSize: 13,
  },
  roleBadge: {
    backgroundColor: "#14b8a6",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  roleBadgeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "700",
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f8fafc",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  itemText: {
    flex: 1,
    fontSize: 15,
    color: "#334155",
  },
});