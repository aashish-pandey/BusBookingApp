import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, Button, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import JourneyCard from './cards/JourneyCard';
import MainBottomBar from './MainBottomBar';



export default function Home({ navigation }) {
    // const [originAddress, setOriginAddress] = useState('');
    // const [destination, setDestination] = useState('');

    // const [shortcutDate1, setShortcutDate1] = useState([styles.button, styles.tagButton, styles.active])
    // const [shortcutDate2, setShortcutDate2] = useState([styles.button, styles.tagButton])


    // const handleOriginAddressChange = (text) => {
    //     setOriginAddress(text);
    // };

    // const handleDestinationChange = (text) => {
    //     setDestination(text);
    // };






    // const handleSearch = () => {

    //     navigation.navigate('busSearch')
    //     // Perform actions based on the provided data (e.g., initiate trip planning)

    //     // Add logic here to handle the provided data (e.g., initiate trip planning)
    // };

    // return (
    // <ScrollView>


    //   <View style={styles.main}>
    //     <View style={styles.profileInfoContainer}>
    //         <View style={styles.profileInfo}>
    //             <Text style={styles.profileInfoText}>Hello Aashish,</Text>
    //             <Text style={styles.profileInfoText}>Book Your Next Ticket</Text>
    //         </View>

    //         <View style={styles.profileIcon}>
    //             <Icon name="user-circle" size={50} color="#808080" />
    //         </View>
    //     </View>

    //     <View style = {styles.bookCard}>
    //         <View style={styles.tripInfo}>
    //             <TouchableOpacity style={[styles.button, styles.tagButton, styles.active]} >
    //                 <Text style={styles.tripInfoText}> <Icon name="arrow-right" size={20} color="#fff" /> Single Trip</Text>
    //             </TouchableOpacity>
    //             <TouchableOpacity disabled style={[styles.button, styles.tagButton, styles.disabled]}>
    //                 <Text style={[styles.tripInfoText, styles.disabled]}> <Icon name="repeat" size={20} color="#000" /> Round Trip</Text>
    //             </TouchableOpacity>
    //         </View>

    //         <View style={styles.tripCard}>
    //             <Text style={styles.tripCardText}>From</Text>
    //             <TextInput style={styles.tripCardTextBox} placeholder='Kathmandu' placeholderTextColor = '#777'></TextInput>
    //             <Text style={styles.tripCardText}>To</Text>
    //             <TextInput style={styles.tripCardTextBox} placeholder='Mahendranagar' placeholderTextColor = '#777'></TextInput>
    //             <Text style={styles.tripCardText}>Date</Text>
    //             <TextInput style={styles.tripCardTextBox} placeholder='5 April 2024' placeholderTextColor = '#777'></TextInput>

    //             <View style={styles.tripInfo}>
    //                 <TouchableOpacity style={shortcutDate1} >
    //                     <Text style={styles.tripInfoText}>Today</Text>
    //                 </TouchableOpacity>
    //                 <TouchableOpacity style={shortcutDate2}>
    //                     <Text style={[styles.tripInfoText]}>Tomorrow</Text>
    //                 </TouchableOpacity>
    //             </View>


    //             <View style={styles.tripCardButton}>
    //                 <TouchableOpacity style={styles.button} onPress={handleSearch}>
    //                     <Text style={styles.buttonText}>FIND BUSES</Text>
    //                 </TouchableOpacity>
    //             </View>
    //         </View>
    //     </View>
    //     <View style={styles.upcomingTripCard}>
    //          <Text style={styles.upcomingTripCardHeading}>Upcoming Journey</Text>
    //         <JourneyCard/>
    //         {/*
    //         <View style={styles.upcomingTripInfo}>
    //             <Text style={styles.tripCardText}>Ktm - Mnr</Text>
    //             <Text style={styles.tripCardText}>25 dec 2023</Text>
    //         </View> */}
    //     </View>


    //   </View>
    //   </ScrollView>
    // );


    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const handleSearch = () => {
        // Logic to handle search based on user inputs
        console.log('Searching for:', {
            singleTrip: true,
            fromLocation,
            toLocation,
            selectedDate,
        });
        navigation.navigate('busSearch')
    };

    const handleSwapLocations = () => {
        // Swap 'fromLocation' and 'toLocation' values
        const temp = fromLocation;
        setFromLocation(toLocation);
        setToLocation(temp);
    };


    return (
        <>
        
        <ScrollView>
            <View style={styles.mainStart}>


                <View>
                    <View style={styles.header}>
                        <View style={styles.textContainer}>
                            <Text style={styles.greenText}>Mero</Text>
                            <Text style={styles.blackText}>Bus</Text>
                        </View>
                        <View style={styles.bellContainer}>
                            <View style={styles.bellOutline}>
                                <Icon name="bell" size={20} color="black" />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.middleView}>

                    <View style={styles.heroImage}></View>
                    <View>
                        <Text style={styles.heroText}>
                            Get your ticket easily
                        </Text>
                        <View style={styles.heroTextView2}>
                            <Text style={styles.heroText}>
                                from
                            </Text>
                            <Text style={[styles.greenText, styles.heroText, styles.logoText]}>
                                Mero
                            </Text>
                            <Text style={styles.heroText}>
                                Bus!
                            </Text>
                        </View>
                    </View>

                </View>


                <View style={styles.formView}>

                    <View style={styles.container}>

                        <TouchableOpacity style={styles.oneWayBtn}>
                            <Text style={styles.oneWayBtnTxt}>One Way</Text>
                        </TouchableOpacity>

                        <View style={styles.inputGroup}>
                            <View style={[styles.iconView, styles.icon1]}>

                                <Icon name="location-arrow" size={20} color="#FD6905" style={styles.icon} />
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="From"
                                value={fromLocation}
                                onChangeText={(text) => setFromLocation(text)}
                            />

                        </View>

                        <View style={styles.inputGroup}>
                            <View style={[styles.iconView, styles.icon2]}>

                                <Icon name="map-marker" size={20} color="#129C38" style={styles.icon} />
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="Destination"
                                value={toLocation}
                                onChangeText={(text) => setToLocation(text)}
                            />
                            <TouchableOpacity onPress={handleSwapLocations} style={styles.swapButton}>
                                <Icon name="exchange" size={30} color="#FD6905" style={styles.rotatedIcon} />
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.inputGroup, styles.dateInput]}>
                            <Icon name="calendar" size={20} color="orange" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Date"
                                value={selectedDate}
                                onChangeText={(text) => setSelectedDate(text)}
                            />
                        </View>

                        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
                            <Text style={styles.searchButtonText}>Search</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
        <MainBottomBar/>
        </>
    )

};


// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         minHeight: Dimensions.get('window').height,
//         width: Dimensions.get('window').width,
//         marginTop: 0,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems:'center',
//         backgroundColor: '#000',
//     },  
//     profileInfoContainer:{
//         marginTop: 60,
//         // marginLeft: 150,
//         width: Dimensions.get('window').width,
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         padding: 10,
//         paddingHorizontal: 30

//     },
//     profileInfo:{
//         // backgroundColor: '#000',
//         // padding: 10,
//     },

//     profileInfoText:{
//         fontSize: 20,
//         // paddingLeft: 20,
//         fontWeight: '400',
//         color: '#fff',
//         lineHeight: 40,
//     },

//     profileIcon:{

//     },
//     bookCard:{
//         marginTop: 50,
//         display: 'flex',
//         alignItems: 'center',
//     },

//     tripInfo:{


//         borderRadius: 20,
//         padding: 10,
//         marginBottom:20,
//         display: 'flex',
//         flexDirection: 'row',
//         minWidth: Dimensions.get('window').width * 0.8,
//         justifyContent: 'space-evenly',
//     },


//     tripInfoText:{
//         color: '#fff',
//         textAlign: 'center',
//         padding: 5,
//         fontSize: 18
//     },

//     tripCard:{
//         backgroundColor : '#151515',
//         marginTop: 5,
//         width: Dimensions.get('window').width * 0.9,
//         padding: 25,
//         borderRadius: 20

//     },

//     tripCardText:{
//         color: '#fff',
//         fontSize: 16

//     },

//     tripCardTextBox:{
//         backgroundColor:'#242424',
//         color: '#fff',
//         margin: 5,
//         paddingVertical: 8,
//         paddingHorizontal: 15,
//         marginBottom: 20,
//         fontSize: 20,
//         minWidth: Dimensions.get('window').width * 0.8
//     },

//     tripCardButton:{
//         alignItems: 'center'
//     },

//     button: {
//         backgroundColor: '#006DFB',
//         paddingVertical: 12,
//         paddingHorizontal: 30,
//         borderRadius: 6,
//         width: 200,
//         marginTop: 20
//       },

//     buttonText: {
//         color: '#fff',
//         fontSize: 16,
//         fontWeight: 'bold',
//         textAlign: 'center'
//     },

//     tagButton:{
//         borderRadius: 20,
//         paddingVertical: 0,
//         paddingHorizontal: 0,
//         width: Dimensions.get('window').width * 0.3,
//         backgroundColor: '#000'
//     },

//     active:{
//         backgroundColor: '#006DFB',
//     },

//     disabled:{
//         color:'#000',
//         backgroundColor: '#666',
//         borderRadius: 20
//     },

//     upcomingTripCard:{
//         minWidth: Dimensions.get('window').width * 0.9,
//         marginTop: 100,
//         marginBottom: 100

//     },

//     upcomingTripInfo:{
//         backgroundColor: '#151515',
//         minWidth: Dimensions.get('window').width * 0.9,
//         padding: 40,
//         borderRadius: 20
//     },
//     upcomingTripCardHeading:{
//         color: '#fff',
//         fontSize: 20,
//         paddingBottom: 10
//     },


// })

const styles = StyleSheet.create({

    mainStart: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        // minHeight: Dimensions.get('screen').height
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: Dimensions.get('screen').width,
        position: 'relative',
        top: 0
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    greenText: {
        color: '#129C38',
        fontWeight: 'bold',
        fontSize: 20,
    },
    blackText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    bellContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bellOutline: {

    },

    middleView: {
        height: Dimensions.get('window').height * 0.25
    },

    heroImage: {
        height: Dimensions.get('window').height * 0.15
    },

    heroText: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'normal',
        marginRight: 5
    },

    logoText: {
        marginRight: 0
    },
    heroTextView2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    formView: {
        backgroundColor: '#F0F0F0',
        padding: 20,
        borderRadius: 28
    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#fff',
        width: Dimensions.get('window').width * 0.9,
        borderRadius: 25

    },

    oneWayBtn: {
        width: Dimensions.get('window').width * 0.4,
        paddingVertical: 10,
        paddingHorizontal: 20,
        // paddingLeft: 30,
        backgroundColor: '#129C38',
        borderRadius: 8,
        marginBottom: 10,
    },
    oneWayBtnTxt: {
        fontSize: 18,
        color: 'white',

    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        borderWidth: 3,
        borderTopWidth: 0,
        borderTopRightRadius: 0,
        borderLeftWidth: 0,
        borderRightWidth: 1,
        borderColor: '#f1f1f1',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
    },
    icon: {
        padding: 15,


    },
    iconView: {
        borderRadius: 12,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon1: {
        backgroundColor: '#FFF2E2'
    },
    icon2: {
        backgroundColor: '#E2FFE7'
    },
    searchButton: {
        backgroundColor: '#FD6905',
        borderRadius: 20,
        padding: 12,
        paddingVertical: 20,
        marginTop: 30,
        alignItems: 'center',
        marginVertical: 30
    },
    dateInput: {
        backgroundColor: '#F6F5FA'
    },
    searchButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',

    },

    swapButton: {
        position: 'absolute',
        backgroundColor: '#F0F0F0',
        top: -50,
        right: 0,
        bottom: 60,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },

    rotatedIcon: {
        transform: [{ rotate: '90deg' }],
    },
})