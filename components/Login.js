import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity} from 'react-native'

export default function Login(){

    const navigation = useNavigation()
    
    const handleLogin = ()=>{
        navigation.navigate('ProfileCard')
    }

    return(
        <View style={styles.main}>

            <View style={styles.legend}>
                <Text style={styles.legendText}>
                    MERO BUS
                </Text>

                <Text style={styles.legendDesp}>
                    Enhancing the travelling experience
                </Text>
            </View>

            <TextInput style={styles.inputBox} placeholder='Enter your email address' placeholderTextColor='#999'></TextInput>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#151515',
        padding: 30,
        // height: Dimensions.get('window').height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    legend: {
        margin: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    legendText :{
        color: '#fff',
        fontSize: 30,
        textDecorationStyle: 'double'
    },
    legendDesp:{
        fontSize: 15,
        color: '#fff'
    },
    inputBox: {
        backgroundColor: '#242424',
        width: Dimensions.get('window').width*0.8,
        fontSize: 20,
        padding: 10,
        color: '#fff'
    },
    loginButton:{
        backgroundColor: '#006DFB',
        width: Dimensions.get('window').width*0.8,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30
    }, 
    buttonText: {
        color: '#fff',
        fontSize: 20
    }
})