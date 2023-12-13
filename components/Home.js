import React, {useState} from 'react';
import { StyleSheet, Text, View,  Dimensions, TouchableOpacity, TextInput, Button, Platform, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import JourneyCard from './cards/JourneyCard';



export default function Home({navigation}){
    const [originAddress, setOriginAddress] = useState('');
    const [destination, setDestination] = useState('');

    const [shortcutDate1, setShortcutDate1] = useState([styles.button, styles.tagButton, styles.active])
    const [shortcutDate2, setShortcutDate2] = useState([styles.button, styles.tagButton])


    const handleOriginAddressChange = (text) => {
      setOriginAddress(text);
    };
  
    const handleDestinationChange = (text) => {
      setDestination(text);
    };
  
  

   
    
  
    const handleSearch = () => {

        navigation.navigate('busSearch')
      // Perform actions based on the provided data (e.g., initiate trip planning)
      
      // Add logic here to handle the provided data (e.g., initiate trip planning)
    };
  
    return (
    <ScrollView>

        
      <View style={styles.main}>
        <View style={styles.profileInfoContainer}>
            <View style={styles.profileInfo}>
                <Text style={styles.profileInfoText}>Hello Aashish,</Text>
                <Text style={styles.profileInfoText}>Book Your Next Ticket</Text>
            </View>

            <View style={styles.profileIcon}>
                <Icon name="user-circle" size={50} color="#808080" />
            </View>
        </View>

        <View style = {styles.bookCard}>
            <View style={styles.tripInfo}>
                <TouchableOpacity style={[styles.button, styles.tagButton, styles.active]} >
                    <Text style={styles.tripInfoText}> <Icon name="arrow-right" size={20} color="#fff" /> Single Trip</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled style={[styles.button, styles.tagButton, styles.disabled]}>
                    <Text style={[styles.tripInfoText, styles.disabled]}> <Icon name="repeat" size={20} color="#000" /> Round Trip</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tripCard}>
                <Text style={styles.tripCardText}>From</Text>
                <TextInput style={styles.tripCardTextBox} placeholder='Kathmandu' placeholderTextColor = '#777'></TextInput>
                <Text style={styles.tripCardText}>To</Text>
                <TextInput style={styles.tripCardTextBox} placeholder='Mahendranagar' placeholderTextColor = '#777'></TextInput>
                <Text style={styles.tripCardText}>Date</Text>
                <TextInput style={styles.tripCardTextBox} placeholder='5 April 2024' placeholderTextColor = '#777'></TextInput>

                <View style={styles.tripInfo}>
                    <TouchableOpacity style={shortcutDate1} >
                        <Text style={styles.tripInfoText}>Today</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={shortcutDate2}>
                        <Text style={[styles.tripInfoText]}>Tomorrow</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.tripCardButton}>
                    <TouchableOpacity style={styles.button} onPress={handleSearch}>
                        <Text style={styles.buttonText}>FIND BUSES</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.upcomingTripCard}>
             <Text style={styles.upcomingTripCardHeading}>Upcoming Journey</Text>
            <JourneyCard/>
            {/*
            <View style={styles.upcomingTripInfo}>
                <Text style={styles.tripCardText}>Ktm - Mnr</Text>
                <Text style={styles.tripCardText}>25 dec 2023</Text>
            </View> */}
        </View>

        
      </View>
      </ScrollView>
    );
  };


const styles = StyleSheet.create({
    main: {
        flex: 1,
        minHeight: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        marginTop: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        backgroundColor: '#000',
    },  
    profileInfoContainer:{
        marginTop: 60,
        // marginLeft: 150,
        width: Dimensions.get('window').width,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: 30
        
    },
    profileInfo:{
        // backgroundColor: '#000',
        // padding: 10,
    },

    profileInfoText:{
        fontSize: 20,
        // paddingLeft: 20,
        fontWeight: '400',
        color: '#fff',
        lineHeight: 40,
    },

    profileIcon:{
        
    },
    bookCard:{
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
    },

    tripInfo:{
        
        
        borderRadius: 20,
        padding: 10,
        marginBottom:20,
        display: 'flex',
        flexDirection: 'row',
        minWidth: Dimensions.get('window').width * 0.8,
        justifyContent: 'space-evenly',
    },
    

    tripInfoText:{
        color: '#fff',
        textAlign: 'center',
        padding: 5,
        fontSize: 18
    },

    tripCard:{
        backgroundColor : '#151515',
        marginTop: 5,
        width: Dimensions.get('window').width * 0.9,
        padding: 25,
        borderRadius: 20
        
    },

    tripCardText:{
        color: '#fff',
        fontSize: 16
    
    },

    tripCardTextBox:{
        backgroundColor:'#242424',
        color: '#fff',
        margin: 5,
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 20,
        minWidth: Dimensions.get('window').width * 0.8
    },

    tripCardButton:{
        alignItems: 'center'
    },

    button: {
        backgroundColor: '#006DFB',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 6,
        width: 200,
        marginTop: 20
      },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    tagButton:{
        borderRadius: 20,
        paddingVertical: 0,
        paddingHorizontal: 0,
        width: Dimensions.get('window').width * 0.3,
        backgroundColor: '#000'
    },

    active:{
        backgroundColor: '#006DFB',
    },

    disabled:{
        color:'#000',
        backgroundColor: '#666',
        borderRadius: 20
    },

    upcomingTripCard:{
        minWidth: Dimensions.get('window').width * 0.9,
        marginTop: 100,
        marginBottom: 100

    },

    upcomingTripInfo:{
        backgroundColor: '#151515',
        minWidth: Dimensions.get('window').width * 0.9,
        padding: 40,
        borderRadius: 20
    },
    upcomingTripCardHeading:{
        color: '#fff',
        fontSize: 20,
        paddingBottom: 10
    },

   
})