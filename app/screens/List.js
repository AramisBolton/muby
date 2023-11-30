import { View, Text, Button } from 'react-native'
import React from 'react'
import { FIREBASE_APP, FIREBASE_AUTH } from '../../FirebaseConfig'


const List = ({nav}) => {
  return (
    <View>
      <Text>List</Text>
      <Button title='Cerrar Sesion' onPress={() => FIREBASE_AUTH.signOut()}></Button>
    </View>
  )
}

export default List