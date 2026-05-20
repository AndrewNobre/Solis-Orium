import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0f766e",
        tabBarInactiveTintColor: "#64748b",
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginBottom: 4,
        },
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 68,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          paddingTop: 4,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="recarga"
        options={{
          title: "Recarga",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flash" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="reservas"
        options={{
          title: "Reservas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="integradores"
        options={{
          title: "Solar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="sunny" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="iot"
        options={{
          title: "IoT",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hardware-chip" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}