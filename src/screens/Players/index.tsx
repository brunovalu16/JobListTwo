import { Container } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";

export function Players() {
    return (
        <Container>
            <Header showbackButton />
            <Highlight title="Nome da Semana" subtitle="Adicione as tarefas por dia" />
            <Button title="Remover tarefa" type="SECUNDARY"/>
            <Players />
        </Container>
    );
}