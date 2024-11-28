import { Container, Name, Icon } from "./styles";

import { ButtonIcon } from "@components/ButtonIcon";

type Props = {
    name: string;
    onRemove: () => void;
};

export function TaskCard({ name }: Props) {
    return (
        <Container>
            <Icon name="task" />
            <Name>
                {name}
            </Name>
            <ButtonIcon icon="highlight-remove" type="SECONDARY" />
        </Container>
    );
}