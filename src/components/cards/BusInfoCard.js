import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


import { useNavigation } from '@react-navigation/native'

export default function BusInfoCard({data}) {
    

    const busInfo = data;
    const busId = busInfo.id;
    const navigation = useNavigation();
    const handleSeatSelection = () => {
        navigation.navigate('chooseSeats', {busId});
    }

    return (
        <View style={styles.container}>
            <View style={styles.left}>

                <View style={styles.headingTitleHeight}>
                    <Text style={styles.heading1Text}>
                        {busInfo.operator}
                    </Text>
                </View>
                <View style={styles.bodySection}>
                <View style={[styles.headingHeight, styles.leftAddress]}>
                    <View style={[styles.iconView, styles.icon1]}>

                        <Icon name="location-arrow" size={20} color="#FD6905" style={styles.icon} />
                    </View>
                    <View>
                        <Text style={styles.AddressText}>
                            {busInfo.origin}
                        </Text>
                        {/* <Text>
                            {busInfo.startDate}
                        </Text> */}
                    </View>
                </View>
                <View style={[styles.headingHeight, styles.leftAddress]}>
                    <View style={[styles.iconView, styles.icon2]}>
                        <Icon name="map-marker" size={20} color="#129C38" style={styles.icon} />
                    </View>
                    <View>
                        <Text style={styles.AddressText}>
                            {busInfo.destination}
                        </Text>
                        {/* <Text>
                            {busInfo.endDate}
                        </Text> */}
                    </View>
                    
                </View>

                <View style={[styles.leftAddress, styles.indexBtnSection]}>
                    <TouchableOpacity style={[styles.indexBtnGreen]}>
                            <Text style={styles.indexBtnText}>{busInfo.availableSeats}/{busInfo.totalSeats} seats</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.indexBtnOrange]}>
                        <Text style={styles.indexBtnText}>{busInfo.busType}</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            <View style={styles.right}>
                <View style={styles.headingTitleHeight}>
                    <Text style={styles.heading1Text}>
                        {busInfo.departureTime}
                    </Text>
                </View>

                <View style={styles.bodySectionRight}>
                    <View style={[styles.headingHeight, styles.butBtnSection]}>
                        <TouchableOpacity style={styles.buyBtn} onPress={handleSeatSelection}>
                            <Text style={styles.buyBtnTxt}>Buy Ticket</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.headingHeight, styles.priceSection]}>
                        <Text style={styles.priceTxt}>Price: </Text>
                        <Text style={styles.priceValueText}>
                            {busInfo.ticketPrice}
                        </Text>
                    </View>

                    {/* <View style={[styles.priceSection]}>
                        <Text>
                            Time: {busInfo.journeyHour} hours
                        </Text>
                    </View> */}
                </View>

            </View>

            <View style={styles.circle}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width * 0.9,
        minHeight: Dimensions.get('screen').height * 0.20,
        elevation: 30,
        backgroundColor: '#fff',
        marginVertical: 20,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 15,
        overflow: 'hidden'
    },
    circle: {
        height: 40,
        width: 40,
        backgroundColor: '#e0e0e0',
        opacity: 1,
        borderRadius: 100,
        position: 'absolute',
        bottom: -20,
        left: Dimensions.get('screen').width * 0.9 * 0.55
    },

    bodySection:{
        
    },

    left: {
        backgroundColor: '#fff',
        width: Dimensions.get('screen').width * 0.9 * 0.55 + 20
    },
    right: {
        backgroundColor: '#fff',
        borderLeftWidth: 1,
        borderColor: '#999',
        borderStyle: 'dashed',
        width: Dimensions.get('screen').width * 0.9 * 0.45 - 20
    },
    headingTitleHeight:{
        height: Dimensions.get('screen').height * 0.2 * 0.22,
        overflow: 'hidden',

    },
    headingHeight: {
        height: Dimensions.get('screen').height * 0.2 * 0.34,
        marginBottom: 2,
        overflow: 'hidden',

    },
    heading1Text: {
        fontSize: 20,
        fontWeight: '500',
        padding: 5,
        paddingHorizontal: 15
    },

    leftAddress: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    AddressText: {
        fontSize: 15,
        fontWeight: '500'
    },
    icon: {
        padding: 12,
    },
    iconView: {
        // borderRadius: 12,
        marginHorizontal: 15,
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

    bodySectionRight: {
        marginTop: 18
    },
    butBtnSection:{
        // width: Dimensions.get('screen').width * 0.4 * 0.6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buyBtn:{
        backgroundColor: '#FD6905',
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    buyBtnTxt: {
        color: '#fff'
    },
    priceSection:{
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    priceTxt:{
        color: '#666',
        fontSize: 12
    },
    priceValueText:{
        fontWeight: '700',
        fontSize: 18
    },
    indexBtnOrange:{
        backgroundColor: '#E2FFE7'   
    },
    indexBtnGreen:{
        backgroundColor: '#FFF2E2'
    },
    indexBtnText:{
        color: '#000',
        fontSize: 14
    }, 
    indexBtnSection:{
        paddingHorizontal: 20,
        marginBottom: 10,
        justifyContent: 'space-between'
    }

})