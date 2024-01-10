import React from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import BusInfoCard from './BusInfoCard'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'

export default function BusBookHeading({parent}) {
    const navigation = useNavigation()
    const handleGoBack = ()=>{
        navigation.navigate(parent)
    }
  return (
    <View style={styles.heading}>
                    <View style={styles.headingTopRow}>

                        <View>
                            <TouchableOpacity onPress={handleGoBack} style={styles.iconBtn}>
                                <Icon name="arrow-left" size={25} color="#fff"/>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={handleGoBack} style={styles.iconBtn}>
                                <Icon name="sliders" size={35} color="#fff"/>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.searchHeading}>
                        <View>
                            <Text style={styles.headingText}>Kathmandu</Text>
                        </View>
                        <View>

                            <Icon name="exchange" size={10} color="#fff" style={styles.rotatedIcon} />


                        </View>
                        <View>
                            <Text style={styles.headingText}>Pokhara</Text>
                        </View>
                    </View>
                </View>
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
        height: Dimensions.get('screen').height * 0.14,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        

    },
    headingTopRow:{
        height: Dimensions.get('screen').height * 0.079,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingTop: 30,
        paddingHorizontal: 20,
    },
    searchHeading: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        

    },
    headingText: {
        color: '#fff',
        fontSize: 20,
        // margin: 20,
        marginHorizontal: 20
    },
    busInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    iconBtn:{
        padding: 15
    }
})

