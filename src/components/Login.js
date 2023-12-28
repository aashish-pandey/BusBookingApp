import { useNavigation } from '@react-navigation/native'
import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Alert} from 'react-native'

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import MainBottomBar from './MainBottomBar';
import { setLoginStatus } from '../store/slices/loginSlice';

export default function Login(){

    const dispatch = useDispatch();
     
    const userInRedux = useSelector((state)=>{
        return state.user;
    });

    const [email, setEmail] = useState(userInRedux.email);
    const [password, setPassword] = useState(userInRedux.password);
    const navigation = useNavigation()

    useEffect(()=>{
        setEmail(userInRedux.email);
        setPassword(userInRedux.password);
    }, [userInRedux])
        

    
    const handleLogin = async()=>{
        //perform checking of entered values;

        try{

            const dataToSend = {
                email: email, 
                password: password,
            }

            const response = await axios.post("https://backend.merobus.xyz/loginUser", dataToSend);
            // console.log(response);
            // console.log("HI");
            if(response.status === 201){
                // Alert.alert('Login Successful');
                dispatch(setUser(dataToSend));
                dispatch(setLoginStatus('true'));
                navigation.navigate('ProfileCard')
            }else{
                Alert.alert("Login failed", "Please enter valid credentials")
            }
            
        }catch(error){
            Alert.alert("Error", "There was an error while logging in");
            console.error("Login Error", error);
        }

    }

    const handleGoToCreateAccount = ()=>{
        navigation.navigate('Register')
    }

    return(
        <View>
        <View style={styles.main}>

            <View style={styles.legend}>
                <Text style={styles.legendText}>
                    MERO BUS
                </Text>

                <Text style={styles.legendDesp}>
                    Enhancing the travelling experience
                </Text>
            </View>

            <TextInput style={styles.inputBox} value={email} placeholder='Enter your email address' placeholderTextColor='#999' onChangeText={data=>{setEmail(data)}}/>
            <TextInput style={styles.inputBox} value={password} placeholder='Enter your password' placeholderTextColor='#999' onChangeText={data=>setPassword(data)}/>


            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={handleGoToCreateAccount}>
                    <Text>CREATE AN ACCOUNT</Text>
                </TouchableOpacity>
            </View>


        </View>
            <MainBottomBar/>

            </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff',
        padding: 30,
        minHeight: Dimensions.get('window').height*0.95,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20, 
        // marginVertical: '20%'
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