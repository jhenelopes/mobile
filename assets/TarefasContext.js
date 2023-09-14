import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {dataOld} from "./DataOld"

export const TarefasContext = React.createContext();

export function DataTarefasContext(props) {
  const [data, setData] = React.useState([]);
  const [lastId, setLastId] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [discription, setDiscription] = React.useState('');
  const [itemEdit, setItemEdit] = React.useState([]);

  React.useEffect(function () {
    async function pegarDados() {
      let list = await getData();
      if (list !== null) {
        setData(list);
      }
     
      else{
        setData(dataOld)
        storeData()
      }
    }
    pegarDados();
  }, []);


  React.useEffect(
    function (data) {
      async function salvarData() {
        await storeData(data);
      }
      salvarData();
    },
    [data]
  );

  function addTarefa(tarefa) {
    let list = data;
    list.push(tarefa);
    console.log(data);
    setData(list);
  }

  

  function deleteTarefa(tarefa) {
    let lista = data.filter(function (valor, props) {
      if (valor.id != valor.id) {
        return valor;
      }
    });
    setData(lista);
  }

  function preEditTarefa(tarefa) {
    setItemEdit(tarefa);
  }

  function editTarefa(tarefa) {
    let list = data.map(function (valor) {
      if (valor.id === tarefa.id) {
        return tarefa;
      } else {
        return valor;
      }
    });
    setData(list);
    setItemEdit({});
  }

  const storeData = async (data) => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('DATA_T', jsonValue);
    } catch (e) {
      // saving error
      console.log(e)
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('DATA_T');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log("limpando")
      //removeValue()
      setData([])
      // getData()
      console.log(e) // error reading value
      return null
    }
  };

const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('DATA_T')
  } catch(e) {
    // remove error
  }

  console.log('Done.')
}


  return (
    <TarefasContext.Provider
      value={{
        data,
        addTarefa,
        lastId,
        setLastId,
        deleteTarefa,
        visible,
        setVisible,
        preEditTarefa,
        itemEdit,
        editTarefa,
      }}>
      {props.children}
    </TarefasContext.Provider>
  );
}
