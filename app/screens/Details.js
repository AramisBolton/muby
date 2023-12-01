import { View, Text, Button, Image, ScrollView, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_FIRESTORE } from '../../FirebaseConfig'
import { collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore'

const Details = (props) => {
  

    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        phone: ''
    })

    const handleChangeText = (name, value) => {
        setUser({...user,[name]: value})
    }

    const deleteUser = async () => {
      await deleteDoc(doc(FIREBASE_FIRESTORE, "users", props.route.params.userId))
      alert('Usuario Borrado')
      props.navigation.navigate("Contactos")
    }

    const updateUser = async () => {
      const ref = doc(FIREBASE_FIRESTORE, "users", props.route.params.userId)
      await updateDoc(ref, {
        name: user.name,
        email: user.email,
        phone: user.phone
      })
      setUser({
        id: '',
        name: '',
        email: '',
        phone: ''
      })
      props.navigation.navigate("Contactos")
    }


  useEffect(() => {
    getUser(props.route.params.userId)
  },[])

  const getUser = async (id) => {
    const querySnapshot = await getDocs(collection(FIREBASE_FIRESTORE, "users"));
    querySnapshot.forEach((doc) => {
      if (doc.id === id){
        // console.log(doc.data());
        setUser({
          id: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          phone: doc.data().phone
        })
        
      }
    });
    
  }

  
  return (
    <ScrollView style={styles.constainer}>
        <View style={styles.inputGroup}>
            <TextInput 
                value={user.name}
                placeholder='Nombre' 
                onChangeText={(value) => handleChangeText('name',value)}>
            </TextInput>
        </View>
        <View style={styles.inputGroup}>
            <TextInput 
                value={user.email}
                placeholder='Email'
                onChangeText={(value) => handleChangeText('email',value)}>
            </TextInput>
        </View>
        <View style={styles.inputGroup}>
            <TextInput 
                value={user.phone}
                placeholder='Telefono'
                onChangeText={(value) => handleChangeText('phone',value)}>
             </TextInput>
        </View>
        <View style={styles.inputGroup}>
            <Button title='Modificar' onPress={() => updateUser()} color="#19ac52"/>
        </View>
        <View style={styles.inputGroup}>
            <Button title='Eliminar' onPress={() => deleteUser()} color="#e37399"/>
        </View>
        <View style={styles.inputGroup}>
            <Button title='Volver' onPress={() => props.navigation.navigate('Contactos')}/>
        </View>
        <Button title='Cerrar Sesion' onPress={() => FIREBASE_AUTH.signOut()}></Button>
    </ScrollView>
  )
}

export default Details

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