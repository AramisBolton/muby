import { View, Text, Button, Image, ScrollView, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_FIRESTORE } from '../../FirebaseConfig'
import { collection, addDoc } from "firebase/firestore"; 

//import firebase from '../../database/firebase.js'

const Create = (props) => {

    const [state, setState] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleChangeText = (name, value) => {
        setState({...state,[name]: value})
    }

    const saveNewUser = async () => {
        if (state.name === ''){
            alert('Ingrese un Nombre')
        } else if (state.email === '') {
            alert('Ingrese un Email')
        } else if (state.phone === '') {
            alert('Ingrese un Telefono')
        } else {
            await addDoc(collection(FIREBASE_FIRESTORE, "users"), {
                name: state.name,
                email: state.email,
                phone: state.phone
            });
            alert('Contacto Guardado')
            props.navigation.navigate('Contactos')
            
        }
        
    }

  return (
    <ScrollView style={styles.constainer}>
        <View style={styles.inputGroup}>
            <TextInput 
                placeholder='Nombre' 
                onChangeText={(value) => handleChangeText('name',value)}>
            </TextInput>
        </View>
        <View style={styles.inputGroup}>
            <TextInput 
                placeholder='Email'
                onChangeText={(value) => handleChangeText('email',value)}>
            </TextInput>
        </View>
        <View style={styles.inputGroup}>
            <TextInput 
                placeholder='Telefono'
                onChangeText={(value) => handleChangeText('phone',value)}>
             </TextInput>
        </View>
        <View style={styles.inputGroup}>
            <Button title='Guardar' onPress={() => saveNewUser()}/>
        </View>
        <View style={styles.inputGroup}>
            <Button title='Volver' onPress={() => props.navigation.navigate('Contactos')}/>
        </View>
        <Button title='Cerrar Sesion' onPress={() => FIREBASE_AUTH.signOut()}></Button>
    </ScrollView>
  )
}

export default Create

const styles = StyleSheet.create({
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    constainer: {
        flex: 1,
        padding: 35
    }
})