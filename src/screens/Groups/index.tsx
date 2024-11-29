import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCards";
import { FlatList } from "react-native";
import { useState } from "react";

import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";


export function Groups() {
    const [ groups, setGroups ] = useState<string[]>([]);

    function handleNewGroups() {
        
    }

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
            <Button
                title='Criar nova Agenda'
                type="PRIMARY"
                onPress={handleNewGroups}
            />
        </Container>
    )
}


//'Semana de 25 a 01/12/2024', 'Semana de 25 a 01/12/2024' 



