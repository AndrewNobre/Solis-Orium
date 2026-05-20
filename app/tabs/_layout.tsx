import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#F59E0B", // Cor laranja do protótipo
        tabBarInactiveTintColor: "#6b7280",
        tabBarStyle: { backgroundColor: "#ffffff", height: 60 },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="integradores"
        options={{
          title: "Cotações",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cash-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}