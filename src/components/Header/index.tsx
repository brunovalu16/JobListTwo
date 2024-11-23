import { Container, Logo, BackIcon, BackButton } from "./styles";
import { Ionicons } from '@expo/vector-icons';

import LogoImg from '@assets/img/Logo-JobList.png'

type Props = {
    showbackButton?: boolean;
}

export function Header({ showbackButton = false }: Props) {
    return(
        <Container>
            {
             showbackButton &&   
            <BackButton>
                <BackIcon name="chevron-back-outline" />
            </BackButton>
            }
            <Logo source={LogoImg} />
        </Container>
    )
};