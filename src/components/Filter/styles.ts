import { css } from "styled-components";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type FilterStyleProps = {
    isActive: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
    ${({ theme, isActive }) => isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_700};
    `};

    border-radius: 4px;
    margin-right: -3px;

    height: 38px;
    width: 90px;
    margin-top: 25px;

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    text-transform: uppercase;
    ${({ theme }) =>  css`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM};
    color: ${theme.COLORS.WHITE};
    `};
`;


//aqui pergunta se o conteúdo for verdadeiro : então pode aplicar a estilização
//${({ theme, isActive }) => isActive && css`