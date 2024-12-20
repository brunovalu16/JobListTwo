import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from '@theme/index';
import { useFonts, Roboto_400Regular,Roboto_700Bold } from '@expo-google-fonts/roboto'


import { Loading } from '@components/Loading';

import { Routes } from '@routes/index';


export default function App() {
const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  
  
  return (
    <ThemeProvider theme={theme} >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Routes /> : <Loading /> }
    </ThemeProvider>
  );
}





//OBSERVAÇÕES

//{ fontsLoaded ? <Groups /> : <Loading /> } troca a pagina e roda o loading enquanto não tem navegação
//const [fontsLoaded] - isso é um vetor com apropriedade "fontsLoaded" que verifica se as fonts foram carregadas
// " ThemeProvider " ele que grencia o uso do theme na aplicação 
