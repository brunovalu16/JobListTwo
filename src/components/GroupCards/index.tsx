import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacityProps } from "react-native";
import { Container, Title, Icon } from "./styles";


type Props = TouchableOpacityProps & {
  title: string;
}

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name="calendar-outline" />
      <Title>
        {title}
      </Title>
    </Container>
  )
}