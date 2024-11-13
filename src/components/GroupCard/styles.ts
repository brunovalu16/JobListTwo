import theme from "@theme/index";
import { StyleSheet, TouchableOpacity } from "react-native";

export const styles = StyleSheet.create({
    Container: {
        width: '90%',
        height: 80,
        backgroundColor: theme.COLORS.GRAY_600,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        top: '-150%'
    },

    Title: {
        fontSize: theme.FONT_SIZE.MD,
        color: theme.COLORS.GRAY_200,
        paddingLeft: 15
    },

    icon: {
        paddingLeft: 15,
    },
});