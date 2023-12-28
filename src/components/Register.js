import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Alert} from 'react-native'

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import MainBottomBar from './MainBottomBar';
import { setLoginStatus } from '../store/slices/loginSlice';


export default function Register() {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation()


    const handleRegister = async function(){

        try{
        const dataToSend = {
            name: name,
            email: email, 
            phoneNumber: phoneNumber, 
            password: password
        }
        // console.log(dataToSend);

        const result = await axios.post('https://backend.merobus.xyz/registerUser', dataToSend);

        if(result.status === 201){
            // Alert.alert('Registration Successful');

            const dt = {
                email: email,
                password: password
            }

            dispatch(setUser(dt));
            dispatch(setLoginStatus('true'));

            navigation.navigate('ProfileCard');
            
        }else{
            Alert.alert("Registration Failed", "Please Check your input");
        }
    }catch(error){
        Alert.alert("Error", "There was error while registering user");
        console.log("Registration Error", error);
    }
    }

    const handleGoToLogin = ()=>{
        navigation.navigate('Login');
    }

  return (
    <View style={styles.main}>

            <View style={styles.legend}>
                <Text style={styles.legendText}>
                    MERO BUS
                </Text>

                <Text style={styles.legendDesp}>
                    Enhancing the travelling experience
                </Text>
            </View>
            <TextInput style={styles.inputBox} placeholder='Enter your name' placeholderTextColor='#999' onChangeText={data=>{setName(data)}}/>
            <TextInput style={styles.inputBox} placeholder='Enter your email address' placeholderTextColor='#999' onChangeText={data=>{setEmail(data)}}/>
            <TextInput style={styles.inputBox} placeholder='Enter your phone Number' placeholderTextColor='#999' onChangeText={data=>{setPhoneNumber(data)}}/>
            <TextInput style={styles.inputBox} placeholder='Enter your password' placeholderTextColor='#999' onChangeText={data=>setPassword(data)}/>


            <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <View>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={handleGoToLogin}>
                    <Text>LOG IN</Text>
                </TouchableOpacity>
            </View>
        <MainBottomBar/>
        </View>
  )
}


const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff',
        padding: 30,
        height: Dimensions.get('window').height*0.95,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    legend: {
        marginVertical: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    legendText :{
        // color: '#fff',
        fontSize: 30,
        textDecorationStyle: 'double'
    },
    legendDesp:{
        fontSize: 15,
        borderColor: '#000'

        // color: '#fff'
    },
    inputBox: {
        // backgroundColor: '#242424',
        width: Dimensions.get('window').width*0.8,
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        marginVertical: 10,
        borderRadius: 12
        // color: '#fff'
    },
    loginButton:{
        backgroundColor: '#006DFB',
        width: Dimensions.get('window').width*0.8,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30, 
        borderRadius: 12
    }, 
    buttonText: {
        color: '#fff',
        fontSize: 20
    }
})