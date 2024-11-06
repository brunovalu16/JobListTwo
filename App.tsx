import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';


import Groups from '@screens/Groups';
import Loading from '@components/Loading/Loading';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Simula um carregamento de 2 segundos antes de exibir o componente principal
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  

  return (
    
  
  <View style={{ flex: 1 }}>
    <StatusBar style="auto" />
    {isLoading ? <Loading /> : <Groups />}
  </View>
    
    
  );
}
