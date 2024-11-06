import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

{/* 01 - _tipagem para o titulo e subtitulo receberem dados dinamicamente_*/}
type Props = {
    titulo: string,
    subTitulo: string,
};

{/* 01 - _a função recebe as propriedades de Props_*/}
export default function Group( { titulo, subTitulo }: Props) {
    return(

        <View style={styles.container}>

        {/* 01 - _o titulo e subtitulo recebem valores dinamicamente_*/}
            <Text style={styles.titulo}> {titulo} </Text>
            <Text style={styles.subTitulo}> {subTitulo} </Text>

        </View>
    );
}