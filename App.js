import { useEffect, useState, useRef } from 'react'
import { StatusBar} from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  TouchableOpacity, 
  View, 
  TextInput,
  FlatList,
  Keyboard

} from 'react-native';

import firebase from './src/Connections/firebaseConnection';
import Login from './src/Components/Login';
import Tasklist from './src/Components/Tasklist';

import Feather from 'react-native-vector-icons/Feather'

export default function App() {

  const [user, setUser] = useState(null);
  const inputRef = useRef(null)
  const [tasks, setTasks] = useState([]);
  const [task, setNewTask] = useState('');
  const [key, setKey] = useState('')

  useEffect(() => {

    function getUser(){

      if(!user){

        return

      }

      firebase.database().ref('tarefas').child(user).once('value', (snapshot) => {

        setTasks([]);

        snapshot?.forEach((childItem) => {

          let data = {

            key: childItem.key,
            nome: childItem.val().nome

          }
          
          setTasks(oldTasks => [...oldTasks, data])

        })

      })

    }

    getUser()

  }, [user])

  function handleDelete(key){

    firebase.database().ref('tarefas').child(user).child(key).remove()
    .then(() => {

      const findTasks = tasks.filter( item => item.key !== key)
      setTasks(findTasks)

    })

  }

  function handleEdit(data){

    setKey(data.key)
    setNewTask(data.nome)
    inputRef.current.focus()

  }

  function cancelEdit(){

    setKey('')
    setNewTask('')
    Keyboard.dismiss()

  }

  function handleAdd(){

    if(task === ''){

      return
      
    }

    if(key !== ''){

      firebase.database().ref('tarefas').child(user).child(key).update({
        nome: task,
      })
      .then(() => {

        const taskIndex = tasks.findIndex(item => item.key === key)
        let tasksClone = tasks;
        tasksClone[taskIndex].nome = task

        setTasks([...tasksClone])

      })

      Keyboard.dismiss()
      setNewTask('')
      setKey('')

      return

    }

      let tarefas = firebase.database().ref('tarefas').child(user)
      let chave = tarefas.push().key

      tarefas.child(chave).set({

        nome:task

      })
      .then(() => {

        const data = {

          key: chave,
          nome: task,

        }

        setTasks(oldTasks => [...oldTasks, data])

      })

      Keyboard.dismiss()
      setNewTask('')

  }

  if(!user){

    return <Login changeStatus={(user) => setUser(user)}/>

  }

  return (
    <SafeAreaView style={styles.container}>

      {key.length > 0 && 

        <View style={{flexDirection: "row", marginBottom: 8,  alignItems: 'center'}}>

        <TouchableOpacity onPress={cancelEdit}>

          <Feather name="x-circle" size={20} color="#FF0000"/>

        </TouchableOpacity>

        <Text style={{marginLeft: 5, color: "#FF0000"}}>

          Você está editando uma tarefa!

        </Text>

        </View>
      
      }

      <View style={styles.containerTask}>

        <TextInput
          style={styles.input}
          placeholder="Escreva uma tarefa aqui!"
          value={task}
          onChangeText={setNewTask}
          ref={inputRef}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>

          <Text style={{color: '#fff', fontSize: 22}}>+</Text>

        </TouchableOpacity>

      </View>

      <FlatList
          data={tasks}
          keyExtractor={ item => item.key }
          renderItem={ ({ item }) => (
            <Tasklist data={item} deleteItem={handleDelete} editItem={handleEdit}/>
          )}
      />

      <StatusBar style="auto" hidden={true}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
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
