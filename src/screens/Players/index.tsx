import { Container, Form, HeaderList, NumbersOfDays } from "./styles";
import { FlatList } from "react-native";
import { useState } from "react";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter/inde";
import { TaskCard } from "@components/TaskCard";

export function Players() {
    const [days, setDays] = useState('segunda');
    const [dayTasks, setDayTasks] = useState(['Estudar para a prova']);

    return (
        <Container>
            <Header showbackButton />

            <Highlight title="Nome da Semana" subtitle="Adicione as tarefas separadas por dia" />
            
            <Form>
                <Input  autoCorrect={false} />
                <ButtonIcon icon="add" />
            </Form>
            
            <HeaderList>
                <FlatList
                    data={['segunda', 'terça']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === days}
                            onPress={() => setDays(item)}
                            />
                    )}
                    horizontal={true}
                />
                <NumbersOfDays>
                    {dayTasks.length}
                </NumbersOfDays>
            </HeaderList>

            <FlatList
                data={dayTasks}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <TaskCard
                        name={item}
                        onRemove={() =>{}} />
                )}
            />
                
            <Button title="Remover tarefa" type="SECUNDARY"/>
        </Container>
    );
}