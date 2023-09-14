import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { List, Card, IconButton, FAB, Avatar } from 'react-native-paper';
import { Swipeable } from 'react-native-gesture-handler';
import { TarefasContext } from '../assets/TarefasContext';

export default function ListaProdutos(props) {
  const { data, lastId, checkTarefa, deleteTarefa, preEditTarefa } =
    React.useContext(TarefasContext);

  function cadastrar() {
    props.navigation.navigate('Novo Produto', { data: props });
  }
  function abrirDetalhe(item) {
    props.navigation.navigate('Detalhes', { data: item });
  }

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
      </>
    );
  }

  const renderItem = ({ item }) => (
    <Swipeable renderRightActions={() => btnDelEdit(item)}>
      <Card onLongPress={() => checkTarefa(item)} style={{ margin: 2 }}>
        <List.Item
          onPress={() => abrirDetalhe(item)}
          title={item.title}
          description={item.discription}
          left={(ps) => <Avatar.Image size={50} source={item.foto} />}
        />
      </Card>
    </Swipeable>
  );

  return (
    <SafeAreaView
      style={{
        flex: 3,
        marginTop: StatusBar.currentHeight || 0,
      }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={lastId}
      />
      <FAB onPress={cadastrar} icon="plus" style={estilos.fab} />
    </SafeAreaView>
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


