import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Tasklist({data}) {
 return (
   <View>

        <Text> {data.nome} </Text>

   </View>
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