
import React from "react";
import { useState } from "react";
import { FlatList } from "react-native";

import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCards";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
    const [ groups, setGroups ] = useState<string[]>([]);
    
    
    return(
        <Container>
            <Header showbackButton />
            <Highlight title="Agendas semanais" subtitle="Escolha sua semana de tarefas"  />
            <FlatList
                data={groups} 
                keyExtractor={item => item}
                renderItem={({ item }) => (
                <GroupCard
                    title={ item }
                />
              )} 
              contentContainerStyle={{flex: 1}}
              ListEmptyComponent={() => <ListEmpty message="Adicione suas agendas semanais" /> }         
            />   
            <Button title="Criar uma nova semana"/>
        </Container>
    )
}



