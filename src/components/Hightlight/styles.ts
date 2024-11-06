import theme from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        top: '-80%',
    },

    titulo: {
        textAlign: 'center',
        fontSize: theme.FONT_SIZE.XL,
        color: theme.COLORS.POOLBLUE_800,
    },

    subTitulo: {
        textAlign: 'center',
        fontSize: theme.FONT_SIZE.MD,
        color: theme.COLORS.GRAY_300,
    },
});