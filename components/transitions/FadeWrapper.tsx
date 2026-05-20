import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { ViewProps } from "react-native";

export default function FadeWrapper({ children, style }: ViewProps) {
  return (
    <Animated.View
      entering={FadeIn.duration(1000)} // Entrada suave (meio segundo)
      exiting={FadeOut.duration(800)} // Saída mais rápida
      style={[{ flex: 1 }, style]}
    >
      {children}
    </Animated.View>
  );
}