import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { ViewProps } from "react-native";

export default function FadeWrapper({ children, style }: ViewProps) {
  return (
    <Animated.View
      entering={FadeIn.duration(500)} // Entrada suave (meio segundo)
      exiting={FadeOut.duration(300)} // Saída mais rápida
      style={[{ flex: 1 }, style]}
    >
      {children}
    </Animated.View>
  );
}