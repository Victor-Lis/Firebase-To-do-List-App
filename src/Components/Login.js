import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {

    const [type, setType] = useState("login")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(){

        alert("Cu")

    }

 return (
   <SafeAreaView style={styles.container}>

        <TextInput
            placeholder='Seu email:'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
        />

        <TextInput
            placeholder='******'
            style={styles.input}
            value={password}
            onChangeText={setPassword}
        />

        <TouchableOpacity
            style={[styles.handleLogin, {backgroundColor: type == "login"? "#3ea6f2": "#141414"}]}
            onPress={handleLogin}
        >

            <Text style={styles.loginText}> {type == "login"? "Acessar": "Cadastrar"} </Text> 

        </TouchableOpacity>

        <TouchableOpacity onPress={() => setType(type => type === 'login' ? "cadastrar" : "login")}>

            <Text style={{textAlign: "center"}}> {type == "login"? "Criar uma conta": "Já possuo uma conta"} </Text>

        </TouchableOpacity>

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        paddingTop: 40,
        backgroundColor: "#f2f6fc",
        paddingHorizontal: 10,

    },
    input: {

        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 5,
        height: 45,
        padding: 10,
        borderWidth: 0.5,
        borderColor: "#141414",

    },
    handleLogin: {

        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#141414",
        height: 45,
        marginBottom: 10,

    },
    loginText: {

        color: "#fff",
        fontSize: 17,

    }

})