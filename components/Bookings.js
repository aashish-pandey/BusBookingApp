import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';

import JourneyCard from './cards/JourneyCard';

export default function Bookings(){
    return(
        <ScrollView>
            <View style = {styles.tabContent}>
                <Text style = {styles.textHeading}>
                    Upcoming Journey (2)
                </Text>
                <View style = {styles.journeyCard}>
                    <JourneyCard/>
                    <JourneyCard/>
                </View>
                

                <Text style = {styles.textHeading}>
                    Past Journey (3)
                </Text>

                <View style = {styles.journeyCard}>
                    <JourneyCard/>
                    <JourneyCard/>
                    <JourneyCard/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    tabContent:{
        flex: 1, 
        // alignItems: 'center',
        justifyContent: 'center',
        minHeight: Dimensions.get('window').height*0.9,
        backgroundColor: '#000',
        // marginTop: 40
    },
    textHeading:{
        color: '#fff',
        fontSize: 30,
        marginTop: 30,
        paddingHorizontal: 30,
        textDecorationLine: 'underline'
    },
    journeyCard:{
        alignItems: 'center'
    }
})