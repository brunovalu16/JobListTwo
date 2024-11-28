import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
    return (
        <Container>
            <Header showbackButton />
            <Content />
            <Icon name="file-tray-stacked-outline" />
            <Highlight title="Crie uma nova semana" subtitle="e adicione suas tarefas diárias para essa semana" />
            <Input placeholder="ex.: Semana de 01 a 07/00/0000" />
            <Button title="Criar" />
        </Container>
    );
}