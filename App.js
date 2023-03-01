import { useState } from 'react'
import { StatusBar} from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  TouchableOpacity, 
  View, 
  TextInput,
  FlatList

} from 'react-native';

import firebase from './src/Connections/firebaseConnection';
import Login from './src/Components/Login';
import Tasklist from './src/Components/TaskList';

let tasks = [
  {key: '1', nome: 'Comprar Coca cola'},
  {key: '2', nome: 'Estudar javascript'}
]

export default function App() {

  const [user, setUser] = useState(null);
  const [task, setNewTask] = useState('');

  if(!user){

    return <Login changeStatus={(user) => setUser(user)}/>

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTask}>

        <TextInput
          style={styles.input}
          placeholder="Escreva uma tarefa aqui!"
          value={task}
          onChangeText={setNewTask}
        />
        <TouchableOpacity style={styles.buttonAdd}>

          <Text style={{color: '#fff', fontSize: 22}}>+</Text>

        </TouchableOpacity>

      </View>

      <FlatList
          data={tasks}
          keyExtractor={ item => item.key }
          renderItem={ ({ item }) => (
            <Tasklist data={item} />
          )}
      />

      <StatusBar style="auto" hidden={true}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: "#f2f6fc",
  },
  containerTask: {

    flexDirection: "row"

  },
  input: {

    flex: 1,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 45,
    padding: 10,
    borderWidth: 0.5,
    borderColor: "#141414",

  },
  buttonAdd: {

    backgroundColor: "#141414",
    height: 45,
    alignItems: 'center',
    justifyContent: "center",
    marginLeft: 5,
    paddingHorizontal: 15,
    borderRadius: 5,

  }
});
