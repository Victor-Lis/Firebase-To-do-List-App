import { useState } from 'react'
import { StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import firebase from './src/Connections/firebaseConnection';
import Login from './src/Components/Login';

export default function App() {

  const [user, setUser] = useState(null);

  if(!user){

    return <Login/>

  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>É nois</Text>
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
});
