import { StyleSheet, Text, View } from "react-native";

import { styles } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Hightlight";

export default function Groups() {
    return (
        
        <View style={styles.Container}>
            <Header />
            <Highlight titulo="Tarefas da semana" subTitulo="Adicione suas tarefas semanais" />
        </View>

    );
};


