import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, Button } from 'react-native';

import DeviceInfo from 'react-native-device-info';

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

  const selectedPage = useSelector((state)=>{
    return state.page;
  });
  // if(selectedPage != selectedTab)setSelectedTab(selectedPage);
  // console.log(selectedPage)

  const loginStatusInfo = useSelector((state)=>{
    return state.loginStatus;
  })

  

  useEffect(()=>{

    DeviceInfo.getAndroidId().then((androidId) => {
      // androidId here
      console.log(androidId);
    });

    setSelectedTab(selectedPage);
    setLoginStatus(loginStatusInfo);
  }, [selectedPage, loginStatus])


  const [searchInput, setSearchInput] = useState('');
  // const [markerCoordinates, setMarkerCoordinates] = useState({
  //   latitude: 37.78825,
  //   longitude: -122.4324,
  // });



  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.922,
    longitudeDelta: 0.0421,
  });
  
  const handleSearch = async () => {
    try {
      const formattedAddress = searchInput.replace(/\s/g, '+');
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${formattedAddress}&format=json`
      );
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0]; // Latitude and Longitude
        setMarkerCoordinates({ latitude: parseFloat(lat), longitude: parseFloat(lon) });
        setMapRegion({latitude: parseFloat(lat), longitude: parseFloat(lon), latitudeDelta: 0.0922, longitudeDelta: 0.0421,});
        console.log("working ")
      } else {
        Alert.alert('Location not found', 'Please try another location.');
      }
    } catch (error) {
      console.error('Error fetching geocoding data:', error);
      Alert.alert('Error', 'There was an error processing your request.');
    }
  };
  
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

      {/* <MainBottomBar/> */}
      

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E2FFE7',
    // top: 0,
    bottom: 5,
    paddingVertical: 20,
    width: Dimensions.get('screen').width * 0.98,
    marginLeft: Dimensions.get('screen').width * 0.01,
    borderRadius: 40,
    position: 'absolute'
  },

  tab: {
    alignItems: 'center',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});