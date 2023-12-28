import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function PassengerInformation() {

    const navigation = useNavigation();

    const busInfo = {
        busOperator: "Mahakali Yatayat",
        origin: 'Kathmandu',
        destination: 'Pokhara',
        boardingPoint: 'KTM Bus Park',
        droppingPoint: 'Baglung Bus Park',
        startTime: '7:50 PM',
        endTime: '4:20 AM',
        travelTime: '8 hr 30 min',
        startDate: '19 feb 2024',
        endDate: '20 feb 2024',
        ticketPrice: 'Rs 1500',
        remainingSeats: '2',
        totalSeats: '36',
        type: 'AC',
        selectedSeats: ['1A', '2B'],

    };

    var totalAmount = busInfo.ticketPrice;

    const handleGoToPaymentPage = () => {
        navigation.navigate('paymentPage');
    }

    const handleGoBack =()=>{
        navigation.navigate('chooseSeats');
    }


    return (
        <View style={styles.main}>
            <View style={styles.topHeading}>

                <View style={styles.backBtnSection}>
                    <TouchableOpacity style={styles.backBtnView} onPress={handleGoBack}>
                        <Icon name='arrow-left' size={20}/>
                    </TouchableOpacity>
                <View>
                    <Text>Passenger Information</Text>
                
                <View style={styles.topHeadingDirection}>
                    <Text style={styles.topHeadingDirectionTxt}>Kathmandu</Text>
                    <Text style={styles.topHeadingDirectionTxt}>-</Text>
                    <Text style={styles.topHeadingDirectionTxt}>Pokhara</Text>
                </View>
                </View>
                </View>
            </View>

            <View >

            
            <ScrollView >
                <View style={styles.container}>
                <View style={styles.travelBusInfo}>
                    <View style={styles.busOperatorHeading}>
                        <Text style={styles.busOperatorHeadingTxt}>
                            {busInfo.busOperator}
                        </Text>
                    </View>
                    <View style={styles.busTravelDetails}>
                        <View >
                            <View style={styles.topDate}>
                                <Text style={styles.topDateTxt}>{busInfo.startDate}</Text>
                                <Text style={styles.topDateTxt}>.</Text>
                                <Text style={styles.topDateTxt}>{busInfo.startTime}</Text>
                            </View>

                            <View>
                                <Text style={styles.topLocationTxt}>{busInfo.boardingPoint}</Text>
                            </View>

                            <View style={styles.noOfSeatsView}>
                                <Text style={styles.noOfSeatsViewTxt}>Seats: {busInfo.selectedSeats.length}</Text>
                            </View>
                        </View>
                        <View >
                            <TouchableOpacity>

                            <Icon name='arrow-right' size={12} color='#ccc' />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={styles.topDate}>
                                <Text style={styles.topDateTxt}>{busInfo.endDate}</Text>
                                <Text style={styles.topDateTxt}>.</Text>
                                <Text style={styles.topDateTxt}>{busInfo.endTime}</Text>
                            </View>

                            <View>
                                <Text style={styles.topLocationTxt}>{busInfo.droppingPoint}</Text>
                            </View>

                            <View style={styles.viewDetails}>
                                <TouchableOpacity>
                                    <Text style={styles.viewDetailsTxt}>View Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={styles.contactDetailsSection}>
        {/* this is for the contact details section. Information about the tickets and details will be sent to the information received from this section */}
                    <Text style={styles.contactDetailsMainHeadingTxt}>Contact Details</Text>
                    <Text style={styles.contactDetailsSubHeadingTxt}>Your tickets and bus details will be sent in here</Text>

                    <View>

                        <View>
                            <View>
                                <TextInput 
                                    style={styles.inputBox}
                                    placeholder="Name"
                                />
                            </View>
                            <View>
                                <TextInput 
                                    style={styles.inputBox}
                                    placeholder='Email Id'
                                />
                            </View>

                            <View>
                                <TextInput 
                                    style={styles.inputBox}
                                    placeholder='Phone Number'
                                />
                            </View>
                        </View>

                    </View>

               
                </View>
                <View style={styles.contactDetailsSection}>
        {/* this is for the contact details section. Information about the tickets and details will be sent to the information received from this section */}
                    <Text style={styles.contactDetailsMainHeadingTxt}>Contact Details</Text>
                    <Text style={styles.contactDetailsSubHeadingTxt}>Your tickets and bus details will be sent in here</Text>

                    <View>

                        <View>
                            <View>
                                <TextInput 
                                    style={styles.inputBox}
                                    placeholder="Name"
                                />
                            </View>
                            <View>
                                <TextInput 
                                    style={styles.inputBox}
                                    placeholder='Email Id'
                                />
                            </View>

                            <View>
                                <TextInput 
                                    style={styles.inputBox}
                                    placeholder='Phone Number'
                                />
                            </View>
                        </View>

                    </View>

               
                </View>
                <View style={styles.contactDetailsSection}>
        {/* this is for the contact details section. Information about the tickets and details will be sent to the information received from this section */}
                    <Text style={styles.contactDetailsMainHeadingTxt}>Contact Details</Text>
                    <Text style={styles.contactDetailsSubHeadingTxt}>Your tickets and bus details will be sent in here</Text>

                    <View>

                        <View>
                            <View>
                                <TextInput 
                                    style={styles.inputBox}
                                    placeholder="Name"
                                />
                            </View>
                            <View>
                                <TextInput 
                                    style={styles.inputBox}
                                    placeholder='Email Id'
                                />
                            </View>

                            <View>
                                <TextInput 
                                    style={styles.inputBox}
                                    placeholder='Phone Number'
                                />
                            </View>
                        </View>

                    </View>

               
                </View>

                {/* <View>
                    <View>
                        <Text>Passenger details</Text>
                    </View>
                </View> */}

                </View>
            </ScrollView>
            
            </View>

            <View style={styles.bottomSection}>
                <View style={styles.bottomSectionHeader}>
                    <View>
                        <Text style={styles.bottomSectionHeaderRightTxt}>Amount</Text>
                        <Text style={styles.bottomSectionHeaderRightTxt}>Tax exluded</Text>
                    </View>
                    <View>
                        <Text style={styles.bottomSectionHeaderLeftTxt}>{totalAmount}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={handleGoToPaymentPage} style={styles.payBtn}>
                    <Text style={styles.payBtnTxt}>Pay Now</Text>
                </TouchableOpacity>
            </View>
            

        </View>
    )
}

const styles = StyleSheet.create({

    main:{
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center', 
        // backgroundColor: '#fff'
    },

    topHeading:{
        width: Dimensions.get('window').width,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        // marginTop: 50,
        borderColor: '#aaa',
        backgroundColor: '#fff'
    },

    backBtnSection: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 5, 
        alignItems: 'center'
    },

    backBtnView:{
        // marginRight: 10,
        paddingVertical: 20,
        paddingRight: 20,
        paddingLeft:5,
    },

    topHeadingDirection:{
        display: 'flex',
        flexDirection: 'row',
        // paddingHorizontal: 30,
        marginBottom: 5
    },

    topHeadingDirectionTxt:{
        fontSize: 12,
        color: '#999'
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // width: Dimensions.get('window').width * 0.96,
        marginBottom:300
    },

    travelBusInfo:{
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
        width: Dimensions.get('window').width * 0.96,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 15,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    busOperatorHeading: {

    },
    busOperatorHeadingTxt: {
        fontSize: 12,
        color: '#444'
    },

    busTravelDetails:{
        display: 'flex',
        flexDirection: 'row',
        width: Dimensions.get('window').width*0.90,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    topDate:{
        display: 'flex',
        flexDirection: 'row',
    },

    topDateTxt: {
        fontWeight: '800',
        fontSize: 14
    },

    topLocationTxt: {
        color: '#333',
        fontSize: 10
    },

    noOfSeatsView: {
        // backgroundColor: '#333',
        padding: 3,
        // width: 'auto'
        
    },

    noOfSeatsViewTxt: {
        color: '#333',
        fontSize: 8,
        
    },

    viewDetails:{
    },

    viewDetailsTxt:{
        color: 'blue',
        textDecorationLine: 'underline'

    },

    contactDetailsSection: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#fff',
        
    },


    contactDetailsMainHeadingTxt:{
        fontSize: 20,
        fontWeight: 'bold'
    },

    contactDetailsSubHeadingTxt : {
        fontSize: 12,
        color: '#777'
    },

    inputBox: {
        // backgroundColor: 'red',
        padding: 10,
        paddingHorizontal: 15,
        color: 'black',
        marginVertical:10, 
        fontSize: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },

    payBtn: {
        backgroundColor: '#FD6905',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        // marginBottom: 150
    },
    payBtnTxt:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    bottomSection:{
        position: 'absolute',
        // bottom: 20,
        top: Dimensions.get('window').height * 0.8,
        width: Dimensions.get('window').width,
        borderTopWidth: 1,
        borderColor: '#333',
        backgroundColor: '#fff',
        paddingBottom: 25,
        
    },

    bottomSectionHeader:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },

    bottomSectionHeaderRightTxt:{
        fontSize: 14
    },

    bottomSectionHeaderLeftTxt:{
        fontSize: 18,
        fontWeight:'bold'
    },

})