import React from 'react'
import { TouchableOpacity } from 'react-native'
import {View, Text, StyleSheet, Dimensions} from 'react-native'

export default function BusInfoCard(){

    const busInfo = {
        origin: 'Kathmandu',
        destination: 'Pokhara', 
        startTime: '19:50',
        endTime: '4:20',
        travelTime: '8 hr 30 min',
        startDate: '19 feb 2024',
        endDate: '20 feb 2024',
        ticketPrice: 'Rs 1500',
        remainingSeats: '2',
        totalSeats: '36',
        type: 'AC'
    }

    return (
        <View style={styles.main}>
            <View style={styles.heading1}>
                <View style={styles.places}>
                    <Text style={styles.placesText}>{busInfo.origin}</Text>
                    <Text style={styles.mainInfo}>{busInfo.startTime}</Text>
                    <Text style={styles.mainInfo}>{busInfo.startDate}</Text>
                </View>
                <Text style={styles.mainInfo}>-- {busInfo.travelTime} --</Text>
                <View style={styles.places}>
                    <Text style={styles.placesText}>{busInfo.destination}</Text>
                    <Text style={styles.mainInfo}>{busInfo.endTime}</Text>
                    <Text style={styles.mainInfo}>{busInfo.endDate}</Text>
                </View>
            </View>

            <View style={styles.heading2}>
                <View>
                    <Text style={styles.text}>{busInfo.type}</Text>
                </View>

                <View>
                    <Text style={styles.text}>{busInfo.ticketPrice}</Text>
                </View>

                <View>
                    <Text style={styles.text}>Total Seats : {busInfo.totalSeats}</Text>
                    <Text style={styles.text}>Remaining Seats : {busInfo.remainingSeats}</Text>
                </View>
            </View>

            <View>
                <TouchableOpacity style={styles.bookButton}>
                    <Text style={styles.text}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        backgroundColor: '#151515',
        width: Dimensions.get('window').width * 0.9,
        marginVertical: 20
    }, 
    text:{
        color: '#fff',
        fontSize: 20
    },
    heading1:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    places:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    placesText:{
        fontSize: 25,
        color: '#fff'
    }, 
    mainInfo:{
        fontSize: 15,
        color: '#fff'
    },
    heading2:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        padding: 20
    },
    bookButton:{
        backgroundColor: '#4CAF50',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
})