import * as React from 'react';
import { View } from 'react';
import { TextInput, FAB } from 'react-native-paper';
import { TarefasContext } from '../assets/TarefasContext';
import { getFormatedDate } from 'react-native-modern-datepicker';

const NovoProduto = (props) => {
  const [text, setText] = React.useState('');

  const [discription, setDiscription] = React.useState('');

  const [foto, setFoto] = React.useState('');

  const [descricao, setDescricao] = React.useState('');

  const {
    addTarefa,
    setLastId,
    setVisible,
    selectDate,
    setSelectDate,
    itemEdit,
    editTarefa,
  } = React.useContext(TarefasContext);

  React.useEffect(
    function () {
      setText(itemEdit.title);
    },
    [setText, itemEdit]
  );

  function criarTarefa() {
    if (Object.keys(itemEdit).length === 0) {
      let tarefa = {
        id: Date.now().toString(36) + Math.random().toString(36),
        title: text,
        discription: discription,
      };
      addTarefa(tarefa);
      setLastId(tarefa.id);
    } else {
      let tarefa = itemEdit;
      tarefa.title = text;
      tarefa.discription = discription;

      editTarefa(itemEdit);
    }

    setText('');
    setDiscription('');
    setDescricao(' ');
    setFoto('');
  }
  return (
    <>
      <TextInput
        label="Nome"
        value={text}
        onChangeText={(text) => setText(text)}
      />

      <TextInput
        label="Valor"
        value={discription}
        onChangeText={(text) => setDiscription(text)}
      />
      <TextInput
        label="Descrição"
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
      />
      <TextInput
        label="Foto - Colar URL"
        value={foto}
        onChangeText={(text) => setFoto(text)}
      />

      <FAB
        onPress={criarTarefa}
        icon="check"
        style={{
          backgroundColor: 'red',
          position: 'absolute',
          right: 0,
          bottom: 0,
          margin: 10,
          zIndex: 2,
        }}
      />
    </>
  );
};

export default NovoProduto;
