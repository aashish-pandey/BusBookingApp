import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert, TouchableOpacity, TextInput, Button, PermissionsAndroid, Linking, Platform } from 'react-native';

import DeviceInfo from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';
import axios from 'axios';


import Map from './src/components/Map';
import Home from './src/components/Home';
import Bookings from './src/components/Bookings';
import Account from './src/components/Account';
import PageNotAvailable from './src/components/PageNotAvailable';
import BusSearch from './src/components/BusSearch';
import ProfileCard from './src/components/cards/ProfileCard';
import Payment from './src/components/payments/Payment';

import Esewa from './src/components/payments/esewa/Esewa';

//navigation imports
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChooseSeats from './src/components/ChooseSeats';
import { useSelector } from 'react-redux';
import store from './src/store';
import MainBottomBar from './src/components/MainBottomBar';
import PassengerInformation from './src/components/passengerInformation/PassengerInformation';
import Register from './src/components/Register';
import Login from './src/components/Login';
// import ProfileCard from './src/components/cards/ProfileCard';




const Stack = createStackNavigator()



export default function App() {

  const [selectedTab, setSelectedTab] = useState(selectedPage);
  const [loginStatus, setLoginStatus] = useState('false');
  const [permissionGranted, setPermissionGranted] = useState(false);

  const selectedPage = useSelector((state)=>{
    return state.page;
  });

  console.log(Platform.Version);


  const openAppSettings = ()=>{
    Linking.openSettings();
  }

  function guideToAppSettings(){
  Alert.alert('Permission Required', 
    'To use this feature, grant the notification permission in the app settings.',
    [
      { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      { text: 'Open Settings', onPress: openAppSettings },
    ],
    { cancelable: false }
  )
}

  async function checkApplicationPermissions(){
    try{
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        )
        console.log(granted)
        if(granted === PermissionsAndroid.RESULTS.GRANTED){
          setPermissionGranted(true);
          // clearInterval(intervalPermissionAsking);
          // console.log("granted");
        }else{
          guideToAppSettings();
          // console.log("not granted");
        }
        
    }catch(error){
      console.log("error while asking permission", error);
    }
  }

  useEffect(()=>{
    if(Platform.Version >= 34){
      console.log("asdfghjpi")
      checkApplicationPermissions();
    }else{
      setPermissionGranted(true)
    }
  }, [])
  var intervalPermissionAsking;
  if(!permissionGranted){

    //  intervalPermissionAsking = setInterval(checkApplicationPermissions, 10000);
  }
  if(permissionGranted){
    // clearInterval(intervalPermissionAsking);
  }



  const loginStatusInfo = useSelector((state)=>{
    return state.loginStatus;
  })

  const getDeviceToken = async()=>{
    try{
      let token = await messaging().getToken();
      setDeviceToken(token);
  
      console.log(token);

    }catch(error){
      console.log(error)
    }
  }
  
  const setDeviceToken = async(token)=>{
    try{

      if(token){
      const dataToSend = {
        token: token,
      }
      console.log(dataToSend)
      const result = await axios.post('https://backend.merobus.xyz/setFCMToken', dataToSend);
      if(result.status === 201){
        console.log("Token Set Successful");
      }else{
        console.log("Token set failed");
      }
    }
  }catch(error){
    console.log(error)
  }
  }
  getDeviceToken();

  useEffect(()=>{


    // DeviceInfo.getAndroidId().then((androidId) => {
    //   // androidId here
    //   console.log(androidId);
    // });
    // checkApplicationPermission();
    setSelectedTab(selectedPage);
    setLoginStatus(loginStatusInfo);
  }, [selectedPage, loginStatus])

  useEffect(()=>{
    const unsubsribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived', JSON.stringify(remoteMessage))
    });

    return unsubsribe;
  }, [])


  
  const renderTabContent = () => {
    switch (selectedTab) {
      case 'home':
        return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='home' component={Home} options={{ headerShown: false }}/>
              <Stack.Screen name='busSearch' component={BusSearch} options={{ headerShown: false }}/>
              <Stack.Screen name='chooseSeats' component={ChooseSeats} options={{ headerShown: false }}/>
              <Stack.Screen name='passengerInformation' component={PassengerInformation} options={{ headerShown: false }}/>
              <Stack.Screen name='paymentPage' component={Payment} options={{ headerShown: false }}/>
              <Stack.Screen name='esewa' component={Esewa} options={{ headerShown: false }}/>


            </Stack.Navigator>
          </NavigationContainer>
        );
      case 'map':
        return (<Map/>)
      case 'bookings':
        return (<Bookings/>);
      case 'account':
        if(loginStatus == 'true'){
          return(
            <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='ProfileCard' component={ProfileCard} options={{ headerShown: false }}/>
              <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
              <Stack.Screen name='Account' component={Account} options={{ headerShown: false }}/>
              <Stack.Screen name='Register' component={Register} options={{ headerShown: false }}/>
            </Stack.Navigator>
          </NavigationContainer>
          )
        }
        return(
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
              <Stack.Screen name='Account' component={Account} options={{ headerShown: false }}/>
              <Stack.Screen name='ProfileCard' component={ProfileCard} options={{ headerShown: false }}/>
              <Stack.Screen name='Register' component={Register} options={{ headerShown: false }}/>
            </Stack.Navigator>
          </NavigationContainer>
        )
      default:
        return (<PageNotAvailable/>);
    }
  };

  


  return (
    <View style={styles.container}>
      
      {renderTabContent()}
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
});