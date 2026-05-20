import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // Escondemos o label padrão para fazer o nosso customizado
        tabBarStyle: {
          backgroundColor: "#ffffff",
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 40,
          height: 70,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          paddingBottom: 0,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="integradores" // Supondo que seja a sua Home/Início
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={24} color="#000" />
          ),
        }}
      />
      
      {/* Adicione outras abas conforme necessário (Mensagens, Notificações) */}

      <Tabs.Screen
        name="perfil"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: focused ? '#000' : 'transparent',
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 20,
            }}>
              <Ionicons name="person" size={20} color={focused ? "#f30a0a" : "#000"} />
              {focused && (
                <Text style={{ color: '#fff', marginLeft: 8, fontWeight: 'bold' }}>Perfil</Text>
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}