import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    padding: 24, 
    backgroundColor: "#ffffff" // Fundo branco padronizado
  },
  title: { 
    fontSize: 32, 
    fontWeight: "bold", 
    marginBottom: 30, 
    textAlign: "center", 
    color: "#111827" 
  },
  selectorContainer: { 
    flexDirection: "row", 
    backgroundColor: "#f3f4f6", 
    borderRadius: 8, 
    padding: 4, 
    marginBottom: 24 
  },
  selectorButton: { 
    flex: 1, 
    paddingVertical: 10, 
    alignItems: "center", 
    borderRadius: 6 
  },
  activeSelector: { 
    backgroundColor: "#ffffff", 
    elevation: 2, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 1.41 
  },
  selectorText: { 
    fontSize: 14, 
    color: "#4b5563", 
    fontWeight: "500", 
    textTransform: "capitalize" 
  },
  activeSelectorText: { 
    color: "#2563eb", 
    fontWeight: "bold" 
  },
  input: { 
    backgroundColor: "#f3f4f6", 
    padding: 16, 
    borderRadius: 8, 
    marginBottom: 16, 
    fontSize: 16 
  },
  button: { 
    backgroundColor: "#2563eb", // Estilo padronizado do botão
    padding: 16, 
    borderRadius: 8, 
    alignItems: "center", 
    marginTop: 8, 
    height: 56, 
    justifyContent: "center" 
  },
  buttonDisabled: { 
    backgroundColor: "#93c5fd" 
  },
  buttonText: { 
    color: "#ffffff", 
    fontSize: 16, 
    fontWeight: "bold", 
    textTransform: "capitalize" 
  },
  linkButton: { 
    marginTop: 24, 
    alignItems: "center" 
  },
  linkText: { 
    color: "#2563eb", 
    fontSize: 14 
  },
});