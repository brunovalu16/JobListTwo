import { Container, Message } from "./styles";

type Props = {
    message: string;
};

<<<<<<< HEAD
export function ListEmpty({ message }: Props) {
    return(
       <Container>
         <Message>
            {message}
         </Message> 
       </Container> 
    );
=======

export function ListEmpty({ message, ...rest }: Props) {
    return(
        <Container {...rest}>
            <Message>{message}</Message>
        </Container>
    )
>>>>>>> 37fa8172ddb04ebad9bde380e4475f0225536678
}