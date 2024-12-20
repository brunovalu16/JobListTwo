import theme from "@theme/index";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_700
}))``;


// " .attrs() " isso serve para acessar as propriedades do theme