<<<<<<< HEAD

import React from "react";
import { useState } from "react";
import { FlatList } from "react-native";
=======
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList } from 'react-native';

>>>>>>> 37fa8172ddb04ebad9bde380e4475f0225536678

import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCards";
<<<<<<< HEAD
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
=======
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {
    const [ groups, setGroups ] = useState<string[]>([]);

    return(
        <Container>
            <Header showbackButton />
            <Highlight title="Agendas semanais" subtitle="Adicione suas agendas semanais"  />
            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                <GroupCard
                    title={item}
                />
             )}
             contentContainerStyle={groups.length === 0 && { flex: 1}}
             ListEmptyComponent={() => (
             <ListEmpty
                message='Adicione suas tarefas semanais aqui.'
             />)}
            />
            <Button title='Criar nova Agenda' type="PRIMARY" />
>>>>>>> 37fa8172ddb04ebad9bde380e4475f0225536678
        </Container>
    )
}


//'Semana de 25 a 01/12/2024', 'Semana de 25 a 01/12/2024' 



