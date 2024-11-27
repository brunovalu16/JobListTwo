import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

<<<<<<< HEAD
export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDERY';
=======
export type ButtonTypeStyleProps = 'PRIMARY' | 'SECUNDARY' ;
>>>>>>> 37fa8172ddb04ebad9bde380e4475f0225536678

type Props = {
    type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
<<<<<<< HEAD

    border-radius: 6px;
    
=======
    border-radius: 6px;
>>>>>>> 37fa8172ddb04ebad9bde380e4475f0225536678
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
<<<<<<< HEAD
    
=======
    
    
  
>>>>>>> 37fa8172ddb04ebad9bde380e4475f0225536678
