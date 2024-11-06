import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { styles } from "./styles";

{/*  01 - _tipa o botão de voltar caso o parâmetro seja true ou false_*/}
type Props = {
    showBackButton?: boolean;
}

export default function Header( { showBackButton = false }: Props) {
    return (
        <View style={styles.containerHeader}>

            <View style={styles.header}> 
                
            {/* 01 - _escondendo o botão de voltar caso o parâmetro seja true_*/}
                { showBackButton && 
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="chevron-back-outline" size={30} color="#4fa3dc" />
                    </TouchableOpacity>
                }

                <Image style={styles.logo} source={require('@assets/img/JobList.png')} />
            </View>

        </View>
    )
}



















