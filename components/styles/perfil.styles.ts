import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 24,
  },
  header: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#9ca3af",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
  },
  email: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 4,
  },
  menu: {
    flex: 1,
  },
  menuItem: {
    backgroundColor: "#f3f4f6",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  menuItemText: {
    fontSize: 16,
    color: "#111827",
  },
  logoutButton: {
    borderColor: "#ef4444",
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  logoutText: {
    color: "#ef4444",
    fontSize: 16,
    fontWeight: "bold",
  },
});