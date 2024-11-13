import theme from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', // Centraliza verticalmente
      alignItems: 'center',     // Centraliza horizontalmente
      backgroundColor: theme.COLORS.GRAY_700, // Cor de fundo (ajuste conforme seu tema)
    },
  });
  