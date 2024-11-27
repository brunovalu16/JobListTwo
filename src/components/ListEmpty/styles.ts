<<<<<<< HEAD
import styled from "styled-components/native";

export const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
`;

export const Message = styled.Text`
    text-align: center;

    font-size: ${({ theme }) => theme.FONT_SIZE.SM};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
   
=======
import Styled from "styled-components/native";

export const Container = Styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;
`;


export const Message = Styled.Text`
    text-align: center;

    font-size: ${({ theme }) => theme.FONT_SIZE.SM };
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
    
>>>>>>> 37fa8172ddb04ebad9bde380e4475f0225536678
