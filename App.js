import * as React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { IconButton,FAB } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListaProdutos from './components/ListaProdutos';
import NovoProduto from "./components/AddProduto";
import Detalhes from "./screens/Details"
import{DataTarefasContext} from './assets/TarefasContext'





export default function App(props) {
  const Stack = createStackNavigator();

  return (
    <DataTarefasContext>

    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerStyle:{backgroundColor:"#808080"}}}
    
        initialRouteName="Lista de contatos">
        <Stack.Screen
          name="Produtos"
          component={ListaProdutos}
        />
        <Stack.Screen name="Novo Produto" component={NovoProduto} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        
      </Stack.Navigator>
    
        
    </NavigationContainer>
  
    </DataTarefasContext>
  );
}
