import React from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import {View, Text, Dimensions, TouchableOpacity} from 'react-native'
import BusInfoCard from './cards/BusInfoCard'


export default function BusSearch(){
    return(
        <ScrollView>
        <View style={styles.main}>
            <Text style={styles.headingText}>Kathmandu To Pokhara</Text>
            <BusInfoCard/>
            <BusInfoCard/>
            <BusInfoCard/>
            <BusInfoCard/>
            <BusInfoCard/>
            <BusInfoCard/>
            <BusInfoCard/>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main:{
        minHeight: Dimensions.get('window').height,
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }, 
    headingText:{
        color: '#fff',
        fontSize: 30,
        margin: 20,
        textDecorationLine: 'underline'
    }
})

