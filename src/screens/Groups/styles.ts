import { StyleSheet } from "react-native";

import theme from '@theme/index';

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_700,
        alignItems: "center",
        justifyContent: "center",
    },

    Text: {
        color: theme.COLORS.GRAY_100,
        fontSize: 30,
    },
});