import React from "react";
import { FlatList } from "react-native";
import { useState } from "react";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter/inde";
import { TaskCard } from "@components/TaskCard";
import { ListEmpty } from "@components/ListEmpty";

import { Container, Form, HeaderList, NumbersOfDays } from "./styles";

export function Players() {
    const [days, setDays] = useState('segunda');
    const [dayTasks, setDayTasks] = useState(['1','2','3','4','5','6','7','8','9','10','11','12']);

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
                        onRemove={() =>{}}
                    />
                )}
                //elimina a passa lateral de rolagem
                showsVerticalScrollIndicator={false}
                //deixa a frase do "ListEmpty" centralizado na tela
                contentContainerStyle={[
                   // { paddingBottom: 100 }, serve para dar mais espaço no padding botton quando chega no final da lista 
                    dayTasks.length === 0 && { flex: 1}
                ]}
                ListEmptyComponent={() => (
                <ListEmpty
                message='Adicione suas tarefas diárias aqui.'
                />
            )}
        />
                
            <Button title="Remover Semana" type="SECUNDARY"/>
        </Container>
    );
}