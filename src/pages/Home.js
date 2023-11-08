import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
export default function Home () {
    let [nota1, setNota1] = useState();
    let [nota2, setNota2] = useState();
    let [nota3, setNota3] = useState();
    let [nota4, setNota4] = useState();
    let [total, setTotal] = useState();

    function CalcularTotal(){

        let resultado = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;
        setTotal(resultado);

        Alert ("A média é: " + total);
    }
    return(
        <View style={styles.container}> 
            <Text style={styles.title}>Projeto Média</Text>
            <TextInput onChangeText={setNota1} style={styles.input} placeholder="Nota 1"></TextInput>
            <TextInput onChangeText={setNota2} style={styles.input} placeholder="Nota 2"></TextInput>
            <TextInput onChangeText={setNota3} style={styles.input} placeholder="Nota 3"></TextInput>
            <TextInput onChangeText={setNota4} style={styles.input} placeholder="Nota 4"></TextInput>
            <TouchableOpacity  onPress={CalcularTotal} style={styles.button}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create ({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        height: 70,
        width: 500,
        left: 700
    },
    title:{
        fontSize: 45,
        marginBottom: 40,
        fontFamily: 'helvetica',
        fontWeight: 'bold'
    },
    input:{
        backgroundColor: '#E1F4FF',
        border: 'solid',
        padding: 10, 
        marginTop: 15,
        fontSize: 20,
        borderRadius: 10,
        marginTop: 15,
        textAlign: 'center',
        width: 300
    },
    button:{
        backgroundColor: '#C4EAFF',
        padding: 15,
        marginTop: 50,
        fontSize: 25,
        border: 'solid',
        borderRadius: 10,
        width: 250,
        fontFamily: 'helvetica'
    },
    buttonText:{
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'helvetica',
        textAlign: 'center'
    }

})