import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";


import { styles } from "./styles";



export default function Loading() {
   
    
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ActivityIndicator size="large" color="#fff" />
        </View>
    );
}