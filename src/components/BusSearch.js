import React from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import BusInfoCard from './cards/BusInfoCard'

import BusBookHeading from './cards/BusBookHeading'
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'



export default function BusSearch() {

    const route = useRoute();
    // const {dataToSend} = route.params;

    const dataToSend = useSelector((state)=>{
        return state.tripSearch
    })
    const response = useSelector((state)=>{
        return state.journeyInfo
    })

    
    // console.log("Data from redux")
    // console.log(journeyInfo)
    
    console.log("Bus search")
    console.log(response)
    
    return (
        <>
        <ScrollView>
            <View style={styles.main}>
                <BusBookHeading parent={'home'} data={dataToSend}/>

                <View style={styles.busInfo}>
                {response.map(data=>(
                    <BusInfoCard key={data.id} data={data}/>
                ))}

                </View>

            </View>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        minHeight: Dimensions.get('window').height,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        marginVertical: 0
    },
    heading: {
        backgroundColor: '#129C38',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.2,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        

    },
    headingTopRow:{
        height: Dimensions.get('screen').height * 0.1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    searchHeading: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    headingText: {
        color: '#fff',
        fontSize: 20,
        margin: 20,
    },
    busInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 100
    }
})

