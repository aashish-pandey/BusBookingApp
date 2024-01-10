import React from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import BusInfoCard from './BusInfoCard'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'

export default function BusBookHeading({parent, data}) {
    const navigation = useNavigation()

    let dt = {
        from: '',
        to: '',
        data: ''
    }

    if(!data){
        data = dt;
    }
    console.log(data)
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
                    <View style={styles.searchHeading}>
                        <View>
                            <Text style={styles.headingText}>{data.from}</Text>
                        </View>
                        <View>

                            <Icon name="exchange" size={10} color="#fff" style={styles.rotatedIcon} />


                        </View>
                        <View>
                            <Text style={styles.headingText}>{data.to}</Text>
                        </View>
                    </View>

                    <View style={styles.searchHeading}>
                        <Text style={styles.headingText}>{data.date}</Text>
                    </View>
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
        // minHeight: Dimensions.get('screen').height * 0.14,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingVertical: 10
        

    },
    headingTopRow:{
        height: Dimensions.get('screen').height * 0.079,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
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

