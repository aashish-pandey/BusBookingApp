import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState, useRef } from 'react'
import { View, TouchableWithoutFeedback , Text, StyleSheet, Dimensions, TextInput,  TouchableOpacity, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import MainBottomBar from './MainBottomBar';
import { setLoginStatus } from '../store/slices/loginSlice';

export default function Login() {

    const dispatch = useDispatch();

    const userInRedux = useSelector((state) => {
        return state.user;
    });

    const [email, setEmail] = useState(userInRedux.email);
    const [password, setPassword] = useState(userInRedux.password);
    const [showPassword, setShowPassword] = useState(false);
    const [savePassword, setSavePassword] = useState(false);

    const inputRefEmail = useRef(null);
    const inputRefPassword = useRef(null);

    const navigation = useNavigation()

    const tooglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    }

    const handleSavePassword = () => {
        setSavePassword((prevSavePassword) => !prevSavePassword);
      };

    useEffect(() => {
        loadSavedCredentials()
    }, [])


    const loadSavedCredentials = async () => {
        try {
          const savedEmail = await AsyncStorage.getItem('email');
          const savedPassword = await AsyncStorage.getItem('password');
        
    
          if (savedEmail && savedPassword) {
            setEmail(savedEmail);
            setPassword(savedPassword);
            setSavePassword(true);
          }
        } catch (error) {
          console.log('Error loading credentials:', error);
        }
      };



    const saveLoginCredentials = async ()=>{
        try {
                        await AsyncStorage.setItem('email', email);
                        await AsyncStorage.setItem('password', password);
                      } catch (error) {
                        console.error('Error saving credentials:', error);
                      }
    }

    const handleLogin = async () => {
        //perform checking of entered values;

        try {

            const dataToSend = {
                email: email,
                password: password,
            }
            console.log("CAll hitted")
            const response = await axios.post("https://backend.merobus.xyz/loginUser", dataToSend);
            // console.log(response);
            console.log("HI");
            if (response.status === 201) {
                if(savePassword){
                    saveLoginCredentials();
                }
                // Alert.alert('Login Successful');
                dispatch(setUser(dataToSend));
                dispatch(setLoginStatus('true'));
                navigation.navigate('ProfileCard')
            } else {
                Alert.alert("Login failed", "Please enter valid credentials")
            }

        } catch (error) {
            Alert.alert("Error", "There was an error while logging in");
            console.error("Login Error", error);
        }

    }

    const handleGoToCreateAccount = () => {
        navigation.navigate('Register')
    }

    const handlePressOutside = () => {
        if (inputRefEmail.current) {
            inputRefEmail.current.blur(); // Remove focus from the input box
          }

          if(inputRefPassword.current){
            inputRefPassword.current.blur();
          }
    };

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

                    <TextInput ref={inputRefEmail} style={styles.inputBox} value={email} placeholder='Enter your email address' placeholderTextColor='#999' onChangeText={data => { setEmail(data) }} />
                </View>
                <View style={styles.passwordSection}>


                    <TextInput
                    ref={inputRefPassword}
                        style={styles.inputBox}
                        secureTextEntry={showPassword}
                        value={password}
                        placeholder='Enter your password'
                        placeholderTextColor='#999'
                        onChangeText={data => setPassword(data)}
                    />

                    <TouchableOpacity onPress={tooglePasswordVisibility} style={styles.togglePasswordButton}>
                        <Icon name={showPassword ? 'eye' : 'eye-slash'} size={24} color="black" />
                    </TouchableOpacity>

                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox value={savePassword} onValueChange={handleSavePassword} />
                    <Text>Remember Me in this device</Text>
                </View>
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
            <MainBottomBar />


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
    legendText: {
        // color: '#fff',
        fontSize: 30,
        textDecorationStyle: 'double'
    },
    legendDesp: {
        fontSize: 15,
        borderColor: '#000'

        // color: '#fff'
    },
    inputBox: {
        // backgroundColor: '#242424',
        width: Dimensions.get('window').width * 0.8,
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        marginVertical: 10,
        borderRadius: 12
        // color: '#fff'
    },

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },

    loginButton: {
        backgroundColor: '#006DFB',
        width: Dimensions.get('window').width * 0.8,
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

    }
})