import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    padding: 24, 
    backgroundColor: "#ffffff" 
  },
  backButton: { 
    position: "absolute", 
    top: 60, 
    left: 24, 
    zIndex: 10 
  },
  progressBarBackground: { 
    height: 8, 
    backgroundColor: "#f3f4f6", 
    borderRadius: 4, 
    marginTop: 80, 
    marginBottom: 40, 
    overflow: "hidden" 
  },
  progressBarFill: { 
    height: "100%", 
    backgroundColor: "#F59E0B", 
    borderRadius: 4 
  },
  title: { 
    fontSize: 28, 
    fontWeight: "bold", 
    marginBottom: 30, 
    color: "#111827" 
  },
  formContainer: { 
    minHeight: 180 
  },
  selectorContainer: { 
    flexDirection: "column", 
    gap: 12 
  },
  selectorButton: { 
    paddingVertical: 16, 
    alignItems: "center", 
    borderRadius: 8, 
    backgroundColor: "#f3f4f6", 
    borderWidth: 1, 
    borderColor: "transparent" 
  },
  activeSelector: { 
    backgroundColor: "#eff6ff", 
    borderColor: "#2563eb" 
  },
  selectorText: { 
    fontSize: 16, 
    color: "#4b5563", 
    fontWeight: "500" 
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
  errorText: { 
    color: "#ef4444", 
    fontSize: 14, 
    marginTop: -8, 
    marginBottom: 16 
  },
  button: { 
    backgroundColor: "#2563eb", 
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
    fontWeight: "bold" 
  },
});