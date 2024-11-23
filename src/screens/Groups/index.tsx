import { Container } from "./styles";
import { Ionicons } from '@expo/vector-icons';

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCards";

export function Groups() {
    return(
        <Container>
            <Header showbackButton />
            <Highlight title="Agendas semanais" subtitle="Escolha sua semana de tarefas"  />
            <GroupCard title="Semana de 18 a 24/11/2024"/>
        </Container>
    )
}



