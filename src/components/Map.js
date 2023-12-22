import React, {useState} from 'react';

import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, Button } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

export default function Map(){
    return(
        <View style={styles.map}>
            <Text>Map section</Text>
        </View>
    )
}


// export default function Map() {
//     const [searchInput, setSearchInput] = useState('');
//     const [markerCoordinates, setMarkerCoordinates] = useState({
//         latitude: 27.7172,
//         longitude: 85.3240,
//     });

//     const [mapRegion, setMapRegion] = useState({
//         latitude: 27.7172,
//         longitude: 85.3240,
//         latitudeDelta: 0.1,
//         longitudeDelta: 0.1,
//     });

//     const handleSearch = async () => {
//         try {
//             const formattedAddress = searchInput.replace(/\s/g, '+');
//             const response = await fetch(
//                 `https://nominatim.openstreetmap.org/search?q=${formattedAddress}&format=json`
//             );

//             if (!response.ok) {
//                 throw new Error('Network response was not ok.');
//             }

//             const data = await response.json();
//             if (data && data.length > 0) {
//                 const { lat, lon } = data[0]; // Latitude and Longitude
//                 setMarkerCoordinates({ latitude: parseFloat(lat), longitude: parseFloat(lon) });
//                 setMapRegion({ latitude: parseFloat(lat), longitude: parseFloat(lon), latitudeDelta: 0.0922, longitudeDelta: 0.0421, });
//                 console.log("working ")
//             } else {
//                 Alert.alert('Location not found', 'Please try another location.');
//             }
//         } catch (error) {
//             console.error('Error fetching geocoding data:', error);
//             Alert.alert('Error', 'There was an error processing your request.');
//         }
//     };

//     return (
//         <View style={styles.tabContent}>
//             <MapView
//                 style={styles.map}
//                 region={mapRegion}
//             >
//                 <Marker
//                     coordinate={markerCoordinates}
//                     title="Marker Title"
//                     description="Marker Description"
//                 />
//             </MapView>

//             <View style={styles.searchContainer}>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Search for a location..."
//                     value={searchInput}
//                     onChangeText={(text) => setSearchInput(text)}
//                 />
//                 <Button title="Search" onPress={handleSearch} />
//             </View>

//         </View>
//     );

// }

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height*0.89,
      justifyContent:'center',
      alignItems:'center'
    },
    searchContainer: {
      position: 'absolute',
      top: 50,
      left: 10,
      right: 10,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 5,
      paddingHorizontal: 10,
      elevation: 4,
    },
    input: {
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    tabContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });