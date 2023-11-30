import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import colors from '../utils/colors'
import {Picker} from '@react-native-picker/picker';

const Form = ({setCapital, setInteres, setMeses}) => {
    const [selectedMonths, setSelectedMonths] = useState();
    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholderTextColor='pink'
                    placeholder='Cantidad'
                    keyboardType='numeric'
                    style={[styles.input, styles.inputPercentage]}
                    onChange={e => setCapital(e.nativeEvent.text)}
                    
                />
                <TextInput
                    placeholderTextColor='pink'
                    placeholder='Interes %'
                    keyboardType='numeric'
                    style={styles.input}
                    onChange={e => setInteres(e.nativeEvent.text)}
                />
            </View>
            
            <View >
                <Picker
                    style={stylesPicker.inputAndroid}
                    selectedValue={selectedMonths}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedMonths(itemValue)
                        setMeses(itemValue)
                    }
                        
                    }>
                    <Picker.Item label="3 meses" value={3} />
                    <Picker.Item label="6 meses" value={6} />
                    <Picker.Item label="9 meses" value={9} />
                    <Picker.Item label="12 meses" value={12} />
                    <Picker.Item label="24 meses" value={24} />
                    
                </Picker>
            </View>
            
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    viewForm: {
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        height: 150,
        width: '85%',
        borderRadius: 30,
        justifyContent: 'center',
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 30,

    },
    input: {
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 5,
        width: '60%',
        color: '#000',
        marginRight: 5,
        marginBottom: 15,
        paddingHorizontal: 20
    },
    viewInputs: {
        flexDirection: 'row'
    },
    inputPercentage: {
        width: '40%'
    }
})

const stylesPicker = StyleSheet.create({
    inputAndroid: {
        backgroundColor:'#fff',
        fontSize: 16,
        paddingHorizontal:10,
        paddingVertical:8,
        borderWidth:1,
        borderColor:'grey',
        borderRadius: 8,
        color: 'red',
        paddingRight:30
    }
})