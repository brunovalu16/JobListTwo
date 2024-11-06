import { StyleSheet } from "react-native";
import theme from "@theme/index";

export const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: theme.COLORS.GRAY_700,
    },

    header: {
        flex: 1,
        top: '20%',
        flexDirection: 'row', // Alinha os elementos na horizontal
        justifyContent: 'space-between', // Ajusta o espaço entre os itens (opcional)
    },

    logo: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },

    button:{
        marginRight: '75%',
    },
});