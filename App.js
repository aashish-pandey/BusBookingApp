import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Map from './components/Map';
import Home from './components/Home';
import Bookings from './components/Bookings';
import Account from './components/Account';
import PageNotAvailable from './components/PageNotAvailable';
import BusSearch from './components/BusSearch';
import ProfileCard from './components/cards/ProfileCard';

//navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import ProfileCard from './components/cards/ProfileCard';



const Stack = createStackNavigator()



export default function App() {

  const [searchInput, setSearchInput] = useState('');
  const [markerCoordinates, setMarkerCoordinates] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });



  const [selectedTab, setSelectedTab] = useState('home');

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
        // return(<BusSearch/>)
        return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='home' component={Home} options={{ headerShown: false }}/>
              <Stack.Screen name='busSearch' component={BusSearch} options={{ headerShown: false }}/>
            </Stack.Navigator>
          </NavigationContainer>
        );
      case 'map':
        return (<Map/>)
      case 'bookings':
        return (<Bookings/>);
      case 'account':
        return(
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='Account' component={Account} options={{ headerShown: false }}/>
              <Stack.Screen name='ProfileCard' component={ProfileCard} options={{ headerShown: false }}/>
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

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => setSelectedTab('home')} style={styles.tab}>
          <Icon name="home" size={35} color={selectedTab === 'home' ? '#006DFB' : '#242424'}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('map')} style={styles.tab}>
          <Icon name="map" size={35} color={selectedTab === 'map' ? '#006DFB' : '#242424'}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('bookings')} style={styles.tab}>
          <Icon name="book" size={35} color={selectedTab === 'bookings' ? '#006DFB' : '#242424'}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('account')} style={styles.tab}>
          <Icon name="user" size={35} color={selectedTab === 'account' ? '#006DFB' : '#242424'}/>
        </TouchableOpacity>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ccc',
    paddingVertical: 20,
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