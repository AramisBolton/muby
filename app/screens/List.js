import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'
import { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_FIRESTORE } from '../../FirebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { ListItem, Avatar } from 'react-native-elements'

const List = (props) => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    consulta()
  })

  const consulta = async () => {
    const us = [];
    const querySnapshot = await getDocs(collection(FIREBASE_FIRESTORE, "users"));
    querySnapshot.forEach((doc) => {
      //console.log(doc.data());
      const {name, email, phone} = doc.data()
      us.push({
        id: doc.id,
        name,
        email,
        phone
      })
    });
    setUsers(us)
    
  }

  return (
    <View>
      <ScrollView>
        <Button title='Crear Usuario' onPress={() => props.navigation.navigate('Crear')}></Button>
        {
          users.map(u => {
            return (
              <ListItem key={u.id} bottomDivider onPress={() => {
                props.navigation.navigate('Detalles',{
                  userId: u.id
                })
              }}>
                <ListItem.Chevron/>
                <Avatar source={{uri:"https://www.escudodigital.com/uploads/s1/13/20/92/google-incognito-1.jpeg"}} rounded/>
                <ListItem.Content>
                  <ListItem.Title>{u.name}</ListItem.Title>
                  <ListItem.Subtitle>{u.email}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              // console.log(u.name+' - '+u.email+' - '+u.phone) 
            )
          })
        }
        <Button title='Cerrar Sesion' onPress={() => FIREBASE_AUTH.signOut()}></Button>
      </ScrollView>
    </View>
  )
}

export default List


