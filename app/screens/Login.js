import { View, Text, useAnimatedValue, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_APP, FIREBASE_AUTH } from '../../FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const auth = FIREBASE_AUTH

    const signIn = async () => {
        setLoading(true)
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response)
        } catch (error) {
            console.log(error);
            alert('El login fallo: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    const signUp = async () => {
        setLoading(true)
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response)
            alert('Usuario creado')
        } catch (error) {
            console.log(error);
            alert('La creacion fallo: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                <TextInput value={email} style={styles.input} placeholder='correo' autoCapitalize='none' onChangeText={text => setEmail(text)}></TextInput>
                <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='contraseña' autoCapitalize='none' onChangeText={text => setPassword(text)}></TextInput>

                {loading ?
                    (<ActivityIndicator size="large" color="#0000ff" />)
                    :
                    (<>
                        <Button title='Login' onPress={signIn} />
                        <Button title='Crear Cuenta' onPress={signUp} />
                    </>)}
            </KeyboardAvoidingView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    },
    button: {
        padding: 3,
        width: 100,
        borderRadius: 4,
        backgroundColor: 'red'
    }
})