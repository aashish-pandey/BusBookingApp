import {React, useEffect, useState} from 'react'
import { ScrollView , View, Text, StyleSheet, Dimensions, Alert} from 'react-native'
import BusBookHeading from './cards/BusBookHeading'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getBusSeatInfo, makeTicket } from '../services/api'
import { setTicketHoldInfo } from '../store/slices/ticketHoldSlice'


export default function ChooseSeats() {

    const navigation = useNavigation()
    const routes = useRoute();
    const dispatch = useDispatch();


    const[busLayoutInfo, setBusLayoutInfo] = useState({});

    const [selectedSeats, setSelectedSeats] = useState(new Set());
  
    const {busId} = routes.params;
    console.log("bus id: ", busId);

    let busDetails = useSelector((state)=>{
        return state.journeyInfo
    })

    // console.log(busDetails)
    const getBusById = (busList, busId)=>{
        const selectedBus = busList.find(bus=> bus.id === busId);
        return selectedBus || null;
    }
    

    busDetails = getBusById(busDetails, busId);

    if(!busDetails){
        busDetails = {
            operator: "",
            departureTime: "",
            busType: "",
            ticketPrice: "",
            destination: "",
        }
    }

    console.log(busDetails)


const handleBookNow = async()=>{
    // navigation.navigate('passengerInformation', {busId})
    try{
    let dt = Array.from(selectedSeats);
    // Alert.alert(
    //     'Selected Seats',
    //     `You have selected: ${dt.join(', ')}`,
    //     [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    //   );


      let dataToSend = {
        id: busId,
        seat: dt
      }

      const response = await makeTicket(dataToSend);
    //   Alert.alert(response);

      const ticketHoldInfoRedux = {
        id: busId,
        ticketSrlNo: response.ticketSrlNo,
        departureDate: "",
        arrivalDate: "",
        departure: response.boardingPoints[0],
        arrivalLocation: busDetails.destination,
        operator: busDetails.operator,
        ticketPrice: busDetails.ticketPrice,
        departureTime: "",
        holdStartingTime: "",
      }

      console.log(ticketHoldInfoRedux)
      dispatch(setTicketHoldInfo(ticketHoldInfoRedux));

    
    //   console.log(response);
    navigation.navigate('passengerInformation', {busId})

      }catch(error){
        console.log(error);
        Alert.alert("Cannot book tickets now!! please try again");
      }
}

const handleBusSeatsInfo = async function(busId){
    try{

        const dataToSend = {
            busId: busId
        }

        const response = await getBusSeatInfo(dataToSend)
        await setBusLayoutInfo(response.data);
        // return response.data;

    }catch (error){
        console.log(error);
        Alert.alert("Something went wrong!! Please try again later");
        
    }
}


useEffect(()=>{
    if(!busId){
        busId = routes.params.busId;
    }
   handleBusSeatsInfo(busId);

    
}, [])

useEffect(()=>{

}, [busLayoutInfo])

const renderSeat = (seat, index)=>{
   

    const handleSeatClick = (seat) => {
        // Create a new Set with the current selected seats
        const newSelectedSeats = new Set(selectedSeats);
    
        if (newSelectedSeats.has(seat)) {
          // If the seat is already selected, remove it
          newSelectedSeats.delete(seat);
        } else {
          // If the seat is not selected, add it
          newSelectedSeats.add(seat);
        }
    
        // Update the state with the new selected seats
        setSelectedSeats(newSelectedSeats);
        console.log("added: ", seat)
      };
    if(seat.displayName == 'na'){
        return(
            <View key={`${seat.displayName}_${index}`} style={styles.noseat}>

            </View>
        )
    }
    else{
        let isSelected = selectedSeats.has(seat.displayName);
        let seatColour = '#fff';
        if(seat.bookingStatus == "yes")seatColour = '#129C38';
        
        

        return(
            <TouchableOpacity key={seat.displayName} onPress={()=>handleSeatClick(seat.displayName)}>
                <View style={[styles.seat, { backgroundColor: isSelected ? '#FD6905' : seatColour }]}>
                        <Text>{seat.displayName}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const renderRow= (row)=>{
    
    return(
        <View key={row} style={styles.seatRow}>
            {busLayoutInfo.seatLayout.slice(row * busLayoutInfo.noOfColumn, (row + 1) * busLayoutInfo.noOfColumn).map(renderSeat)}
        </View>
    )
}


return (
    <View>
      <ScrollView>
        <View style={styles.main}>
            <BusBookHeading parent={'busSearch'}/>
            <View style={styles.enlargeGreenBox}></View>
            <View style={styles.detailsBox}>
                   <View style={styles.detailsRow}>
                        <Text style={styles.operatorText}>
                            {busDetails.operator}
                        </Text>

                        <Text style={styles.timeText}>
                            {busDetails.departureTime}
                        </Text>
                   </View>

                   <View style={styles.detailsRow}>
                        <View style={styles.detailSubRow}>
                            <Text style={styles.subInfoText}>Type:</Text>
                            <Text style={[styles.subValueText, styles.orangeText]}>
                                {busDetails.busType}
                            </Text>
                        </View>

                        <View style={styles.detailSubRow}>
                            <Text style={styles.subInfoText}>Price:</Text>
                            <Text style={styles.subValueText}>
                                {busDetails.ticketPrice}
                            </Text>
                        </View>
                   </View>
            </View>

            <View style={styles.legendSection}>

                <View style={styles.legendRow}>
                    <View style={[styles.rectangle]}></View>
                    <Text>Available</Text>
                </View>
                <View style={styles.legendRow}>
                    <View style={[styles.rectangle, styles.orangeRect]}></View>
                    <Text>Selected</Text>
                </View>
                <View style={styles.legendRow}>
                    <View style={[styles.rectangle, styles.greenRect]}></View>
                    <Text>Booked</Text>
                </View>


            </View>


            

            <View style={styles.busOutline}>

                <View style={styles.seatSection}>

                    

                    {busLayoutInfo.seatLayout && busLayoutInfo.seatLayout.length && Array.from({length: busLayoutInfo.seatLayout.length / busLayoutInfo.noOfColumn}, (_, index)=>renderRow(index))}
                    {/* {console.log(busLayoutInfo)} */}
                    {/* <View style={styles.seatRow}>
                    <View style={[styles.seat, seatSelected ? styles.orangeSeat : styles.whiteSeat]}>
                        <TouchableOpacity onPress={handleSeatSelection} style={styles.seatBtn}>
                            <Text>A1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.seat}></View>
                    <View style={styles.noseat}></View>
                    <View style={styles.seat}></View>
                    <View style={styles.seat}></View>
                    </View>

                    <View style={styles.seatRow}>
                    <View style={styles.seat}></View>
                    <View style={styles.seat}></View>
                    <View style={styles.noseat}></View>
                    <View style={styles.seat}></View>
                    <View style={styles.seat}></View>
                    </View>

                    <View style={styles.seatRow}>
                    <View style={styles.seat}></View>
                    <View style={styles.seat}></View>
                    <View style={styles.noseat}></View>
                    <View style={styles.seat}></View>
                    <View style={styles.seat}></View>
                    </View>

                    <View style={styles.seatRow}>
                    <View style={styles.seat}></View>
                    <View style={styles.seat}></View>
                    <View style={styles.noseat}></View>
                    <View style={styles.seat}></View>
                    <View style={styles.seat}></View>
                    </View>

                    <View style={styles.seatRow}>
                    <View style={styles.seat}></View>
                    <View style={styles.seat}></View>
                    <View style={styles.noseat}></View>
                    <View style={styles.seat}></View>
                    <View style={styles.seat}></View>
                    </View>

                    <View style={styles.seatRow}>
                    <View style={styles.seat}></View>
                    <View style={styles.seat}></View>
                    <View style={styles.noseat}></View>
                    <View style={styles.seat}></View>
                    <View style={styles.seat}></View>
                    </View>

                    <View style={styles.seatRow}>
                    <View style={styles.seat}></View>
                    <View style={styles.seat}></View>
                    <View style={styles.noseat}></View>
                    <View style={styles.seat}></View>
                    <View style={styles.seat}></View>
                    </View>

                    <View style={styles.seatRow}>
                    <View style={styles.seat}></View>
                    <View style={styles.seat}></View>
                    <View style={styles.noseat}></View>
                    <View style={styles.seat}></View>
                    <View style={styles.seat}></View>
                    </View> */}

                </View>

                <View style={styles.busDoor}></View>
                <View style={styles.stering}>
                    <View style={styles.steringHorizontal}></View>
                    <View style = {styles.steringVertical}></View>
                </View>
            </View>

            

        </View>
    </ScrollView>

<View style={styles.bookNowBtnView}>
<TouchableOpacity style={styles.bookNowBtn} onPress={handleBookNow}>
    <Text style={styles.bookNowBtnTxt}>Book Now</Text>
</TouchableOpacity>
</View>

</View>
  )
}


const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: Dimensions.get('screen').height
    },
    enlargeGreenBox: {
        marginTop: -25,
        height: Dimensions.get('screen').height * 0.07,
        width: Dimensions.get('screen').width,
        backgroundColor: '#129C38',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40

    },
    detailsBox: {
        position: 'relative',
        backgroundColor: '#fff',
        marginTop: -45,
        height: Dimensions.get('screen').height * 0.15,
        width: Dimensions.get('screen').width * 0.86,
        elevation: 30,
        borderRadius: 15,
        padding: 20

    },
    detailsRow:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    operatorText: {
        fontSize: 20,
        fontWeight: '500'
    },
    timeText: {
        fontSize: 17,
        fontWeight: '500'
    },
    detailSubRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subInfoText:{
        color: '#777',
        paddingHorizontal: 5
    },
    subValueText: {
        fontWeight: '500',
        fontSize: 18
    },
    orangeText: {
        color: '#FD6905'
    },
    legendSection: {
        width: Dimensions.get('screen').width * 0.86,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20
    },
    rectangle: {
        height: 15,
        width: 15,
        backgroundColor: '#fff',
        marginRight: 10 
    },

    orangeRect: {
        backgroundColor: '#FD6905'
    },
    greenRect: {
        backgroundColor: '#129C38'
    },
    legendRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    busOutline:{
        backgroundColor: '#CDEED6',
        // height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width * 0.86,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 50,
        marginBottom: 100
        // justifyContent: 'center'
    },
    busDoor: {
        position: 'absolute',
        backgroundColor: '#eee',
        height: 40,
        width: 25,
        top: 70,
        left: 0
    }, 
    stering: {
        position: 'absolute',
        height: 50,
        width: 50,
        right: 30,
        top: 50,
        borderRadius: 100,
        borderWidth: 8,
        borderColor: '#FD6905'
    },
    steringHorizontal: {
        position: 'absolute',
        backgroundColor: '#FD6905',
        width: 40,
        height: 5,
        top: 15
    },
    steringVertical: {
        position: 'absolute',
        backgroundColor: '#FD6905',
        width: 5,
        height: 20,
        top: 16,
        left: 15
    },
    seatSection:{
        // backgroundColor: 'black',
        marginTop: 130,
        width: Dimensions.get('screen').width * 0.86 * 0.86
    },
    seatRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginVertical: 6
    },
    seat:{
        height: 45,
        width: 45,
        borderRadius: 8,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    whiteSeat: {
        backgroundColor: '#fff'
    },
    orangeSeat: {
        backgroundColor: '#FD6905'
    },
    greenSeat: {
        backgroundColor: '#129C38'
    },
    noseat: {
        height: 45,
        width: 45,
        backgroundColor: '#CDEED6'
    },
    bookNowBtn:{
        backgroundColor: '#FD6905',
        width: Dimensions.get('screen').width * 0.86,
        // position: 'absolute',
        // left: -Dimensions.get('screen').width * 0.43,
        // top: Dimensions.get('window').height * 0.1,
        // padding: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 100,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookNowBtnTxt: {
        color: 'white',
        fontSize: 18,
        padding: 15,
    },
    bookNowBtnView:{
        position: 'absolute',
        top: Dimensions.get('screen').height * 0.86,
        left: Dimensions.get('screen').width * 0.065,
        zIndex: 5
    },
    seatBtn:{
        padding: 15,
    }

})