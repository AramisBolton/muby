import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { FIREBASE_APP, FIREBASE_AUTH } from '../../FirebaseConfig'
import data from '../../json/info.json'


const List = ({nav}) => {
  return (
    <View>
      <ScrollView>
        <View>
          <Image source={{uri: `${data[0].url}`}} style={styles.image} />
          <Text style={styles.text}>{data[0].name}</Text>
          <Button title='Añadir Reseña' style={styles.button}></Button>
        </View>
        <View>
          <Image source={{uri: `${data[1].url}`}} style={styles.image} />
          <Text style={styles.text}>{data[1].name}</Text>
          <Button title='Añadir Reseña' style={styles.button}></Button>
        </View>
        <View>
          <Image source={{uri: `${data[2].url}`}} style={styles.image} />
          <Text style={styles.text}>{data[2].name}</Text>
          <Button title='Añadir Reseña' style={styles.button}></Button>
        </View>
        <View>
          <Image source={{uri: `${data[3].url}`}} style={styles.image} />
          <Text style={styles.text}>{data[3].name}</Text>
          <Button title='Añadir Reseña' style={styles.button}></Button>
        </View>
        <View>
          <Image source={{uri: `${data[4].url}`}} style={styles.image} />
          <Text style={styles.text}>{data[4].name}</Text>
          <Button title='Añadir Reseña' style={styles.button}></Button>
        </View>
        <View>
          <Image source={{uri: `${data[5].url}`}} style={styles.image} />
          <Text style={styles.text}>{data[5].name}</Text>
          <Button title='Añadir Reseña' style={styles.button}></Button>
        </View>
        <View>
          <Image source={{uri: `${data[6].url}`}} style={styles.image} />
          <Text style={styles.text}>{data[6].name}</Text>
          <Button title='Añadir Reseña' style={styles.button}></Button>
        </View>
        <View>
          <Image source={{uri: `${data[7].url}`}} style={styles.image} />
          <Text style={styles.text}>{data[7].name}</Text>
          <Button title='Añadir Reseña' style={styles.button}></Button>
        </View>
        <View>
          <Image source={{uri: `${data[8].url}`}} style={styles.image} />
          <Text style={styles.text}>{data[8].name}</Text>
          <Button title='Añadir Reseña' style={styles.button}></Button>
        </View>
        
        <Button title='Cerrar Sesion' onPress={() => FIREBASE_AUTH.signOut()}></Button>
      </ScrollView>
      
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 250,
    alignSelf: 'center'
  },
  text: {
    textAlign: 'center'
  },
  button: {
    textShadowColor: 'red'
  }
})
