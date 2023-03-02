import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import Feather from 'react-native-vector-icons/Feather'

export default function Tasklist({data, deleteItem, editItem}) {
 return (
   <View style={styles.container}>

      <TouchableOpacity style={{marginRight: 10}} onPress={() => deleteItem(data.key)}>

        <Feather name="trash" color='#fff' size={22}/>

      </TouchableOpacity>

      <TouchableWithoutFeedback style={{paddingRight: 10}} onPress={() => editItem(data)}>

        <Text style={{color: "#fff", paddingRight: 10}}> {data.nome} </Text>

      </TouchableWithoutFeedback>

   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: "#121212",
      alignItems: "center",
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
    },
});