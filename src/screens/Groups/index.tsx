import { useState } from "react";
import { View, FlatList, ScrollView } from "react-native";

import { styles } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Hightlight";
import GroupCard from "@components/GroupCard/index";




export default function Groups() {
    const [ groups, setGroups ] = useState<string[]>(['Dia 11', 'Dia 12', 'Dia 13']);
    const 


    return (
        
        <View style={styles.Container}>
            
            <Header />
            
            <Highlight
                titulo="Tarefas da semana"
                subTitulo="Adicione suas tarefas semanais"
            />

            
                <GroupCard title="oi"/>
            
           
            
        </View>
     );
};


