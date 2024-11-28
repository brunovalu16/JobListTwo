import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { Container } from "./styles";


export function Input({...rest}: TextInputProps) {
    const { COLORS } = useTheme();

    return (
        <Container
            placeholder="ex.: Semana de 01 a 07/00/0000"
            placeholderTextColor={COLORS.GRAY_300}
            {...rest}
        />
            
        
    );
}