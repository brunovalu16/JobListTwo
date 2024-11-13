import React from "react";
import { Text, View, TouchableOpacityProps, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
};

export default function GroupCard( { title, ...rest } : Props) {
    return (
        <TouchableOpacity style={styles.Container} {...rest}>
            <Ionicons style={styles.icon} name="folder-outline" size={30} color="#4fa3dc" />   
            <Text style={styles.Title}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}