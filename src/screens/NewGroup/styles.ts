import styled from "styled-components/native";
import Ionicons from '@expo/vector-icons/Ionicons'
import theme from "@theme/index";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;
`;

export const Content = styled.View`
    
    justify-content: center;
`;

export const Icon = styled(Ionicons).attrs(({ theme }) => ({
    size: 56,
    color: theme.COLORS.GREEN_700,
}))`
    align-self: center;
`;
    