import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {
  List,
  Card,
  IconButton,
  FAB,
  Avatar,
  Title,
  Paragraph,
  Button,
} from 'react-native-paper';
import { Swipeable } from 'react-native-gesture-handler';
import { TarefasContext } from '../assets/TarefasContext';
import { DataOld } from '../assets/DataOld';

export default function Detalhes(props) {
  const { data, lastId, checkTarefa, deleteTarefa, preEditTarefa } =
    React.useContext(TarefasContext);

    const item = props.route.params.data 

  function btnDelEdit(tarefa) {
    return (
      <>
        <View style={{ backgroundColor: '#ff1122' }}>
          <IconButton
            icon="delete"
            color="#fff"
            size={10}
            onPress={() => deleteTarefa(tarefa)}
          />
        </View>
        <View style={{ backgroundColor: '#ffee22' }}>
          <IconButton
            icon="pencil"
            color="#fff"
            size={10}
            onPress={() => preEditTarefa(tarefa)}
          />
        </View>
        <FAB
          onPress={() => {
            props.navigation.navigate('Novo Produto', {});
          }}
          icon="plus"
          style={estilos.fab}
        />
      </>
    );
  }

  

  return (
    <View>
      <Card style={{ margin: 10, backgroundColor: '#808080' }}>
        <Card.Cover source={{ uri:item.foto }} />

        <Card.Content>
          <Title style={{ textAlign: 'center' }}> {item.title} </Title>
          <Paragraph style={{ margin: 1 }}> {item.discription} </Paragraph>
          <Card.Actions>
            <Button
              onPress={() => {
                deleteTarefa(item);
                props.navigation.back()
                }}
              style={{ backgroundColor: 'red', color: 'white' }}>
              Deletar
            </Button>

            <Button
              onPress={() => item}
              style={{ backgroundColor: 'yellow', color: 'white' }}>
              Editar
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
      <Card style={{ margin: 10, backgroundColor: '#808080' }}>
        <Title style={{ textAlign: 'center' }}> Descrição </Title>
        <Text style={{ textAlign: 'center' }}>{item.descricao} </Text>
      </Card>
    </View>
  );
}
const estilos = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 10,
    backgroundColor: 'red',
    zIndex: 2,
  },
});


