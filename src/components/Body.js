import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Body({ capital, interes, meses, total, error }) {
    return (
        <View style={styles.body}>
            {total &&
                <View >
                    <Text style={styles.title}>Resumen</Text>
                    <View style={styles.data}>
                        <Text >Cantidad solicitada: {capital}</Text>
                        <Text >Interes solicitado: {interes}</Text>
                        <Text >Cantidad de meses: {meses}</Text>
                        <Text >Total por mes: {total.monthlyFee}</Text>
                        <Text >Total por mes: {total.totalPayable}</Text>
                        
                        
                    </View>
                </View>
            }
            <View>
                <Text style={styles.error}>{error}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        color: '#F00',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    body: {
        marginHorizontal: 30
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    data: {
        justifyContent: 'space-between'
    }
})