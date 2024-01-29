import { useNavigation } from '@react-navigation/native'
import React, {useRef, useState} from 'react'
import {View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import MainBottomBar from './MainBottomBar';
import { setLoginStatus } from '../store/slices/loginSlice';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function Register() {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneNumberRef = useRef(null);
    const passwordRef = useRef(null);


    const navigation = useNavigation()

    const tooglePasswordVisibility = ()=>{
        setShowPassword((prev)=> !prev);
    }


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

    const handlePressOutside = ()=>{
        if(nameRef.current)nameRef.current.blur();
        if(emailRef.current)emailRef.current.blur();
        if(phoneNumberRef.current)phoneNumberRef.current.blur();
        if(passwordRef.current)passwordRef.current.blur();
    }

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
    <View style={styles.body}>
    <View style={styles.main}>

            <View style={styles.legend}>
                <Text style={styles.legendText}>
                    MERO BUS
                </Text>

                <Text style={styles.legendDesp}>
                    Enhancing the travelling experience
                </Text>
            </View>
            <View>

            <TextInput ref={nameRef} style={styles.inputBox} placeholder='Enter your name' placeholderTextColor='#999' onChangeText={data=>{setName(data)}}/>
            </View>

            <View>

            <TextInput ref={emailRef} style={styles.inputBox} placeholder='Enter your email address' placeholderTextColor='#999' onChangeText={data=>{setEmail(data)}}/>
            </View>

            <View>

            <TextInput ref={phoneNumberRef} style={styles.inputBox} placeholder='Enter your phone Number' placeholderTextColor='#999' onChangeText={data=>{setPhoneNumber(data)}}/>
            </View>
            <View>

            <TextInput ref={passwordRef} secureTextEntry = {!showPassword} style={styles.inputBox} placeholder='Enter your password' placeholderTextColor='#999' onChangeText={data=>setPassword(data)}/>
            <TouchableOpacity onPress={tooglePasswordVisibility} style={styles.togglePasswordButton}>
            <Icon name={showPassword ? 'eye' : 'eye-slash'} size={24} color="black" />
            </TouchableOpacity>
            </View>


            <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <View style={styles.loginSection}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={handleGoToLogin}>
                    <Text>LOG IN</Text>
                </TouchableOpacity>
            </View>
        </View>
        <MainBottomBar/>
        </View>
        </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
    body: {
        minHeight: Dimensions.get('window').height * 0.98,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    main: {
        backgroundColor: '#fff',
        maring: 30,
        padding: 20,
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        
        borderRadius: 20,
        borderColor: '#000'
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
    },
    togglePasswordButton: {
        padding: 10,
        paddingVertical: 20,
        position: 'absolute',
        right: 0,
        
    },
    loginSection:{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})