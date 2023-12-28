import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, Alert, BackHandler, AppState,View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import WebView from 'react-native-webview';



export default function Payment() {

  const [appState, setAppState] = useState(AppState.currentState);

  const [formData, setFormData] = useState({
    amount: '100',
    tax_amount: '10',
    total_amount: '110',
    transaction_uuid: 'ab14a8f2b02c3',
    product_code: 'EPAYTEST',
    product_service_charge: '0',
    product_delivery_charge: '0',
    success_url: 'https://esewa.com.np',
    failure_url: 'https://google.com',
    signed_field_names: 'total_amount,transaction_uuid,product_code',
    signature: 'YVweM7CgAtZW5tRKica/BIeYFvpSj09AaInsulqNKHk=', // Your generated signature will go here
  });

    const navigation = useNavigation();
    const handleEsewa = ()=>{
        navigation.navigate('esewa');
    }

    const handleGoBack =()=>{
      navigation.navigate('passengerInformation')
    }

    useEffect(()=>{
      const backAction = ()=>{
        console.log('call api to free reserved seat');
        return false;
      }

      if((appState.match(/inactive|background/) || appState === 'active')){
        console.log('call api to free researved seat');
      }

      const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

      return ()=>{
        backHandler.remove();
      }


    }, [appState])



   
  return (
    <View>
      <View style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <TouchableOpacity style={styles.backBtnView} onPress={handleGoBack}>
          <Icon name='arrow-left' size={20}/>
          </TouchableOpacity>
          <Text>Pay : Rs 584</Text>
        </View>
        <View >
          <Text style={styles.topBarRightTxt}>05:30</Text>
        </View>
      </View>
    
    <ScrollView>
        <View style={styles.reviewBookSection}>
          <View style={styles.reviewBookSectionTop}>
            <View>
              <Text>Review Booking</Text>
              <Text>1 seat</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.reviewBookSectionSecond}>
            <View style={styles.reviewBookSectionAddressDetails}>
              <Text>Kathmandu</Text>
              <Text>-</Text>
              <Text>Pokhara</Text>
            </View>
            <View>
              <Text>Fri, 29 Dec: 00:55</Text>
            </View>
          </View>
        </View>


        <View style={styles.couponSection}>
          <View>
            <Text>Have a coupon code?</Text>
          </View>
          <View style={styles.couponInputSection}>
            <TextInput
            placeholder='Coupon Code'
            style={styles.couponInput}
            />
            <TouchableOpacity style={styles.couponApplyBtn}>
              <Text>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.paymentSection}>
          <View>
            <Text>Payment Options</Text>
          </View>
          <View>
            <View style={styles.paymentOptions}>
              <Text>Esewa</Text>
              
              <TouchableOpacity onPress={handleEsewa} style={[styles.payBtn, styles.greenBackground]}>
                <Text style={styles.whiteTxt}>Pay via Esewa</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.paymentOptions}>
              <Text>Khalti</Text>
              <TouchableOpacity style={[styles.payBtn, styles.purpleBackground]}>
                <Text style={styles.whiteTxt}>Pay via khalti</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 15,
    backgroundColor: '#fff'
  },

  topBarLeft:{
    display: 'flex',
    flexDirection: 'row'
  },

  topBarRightTxt:{
    fontWeight: 'bold'
  },
  backBtnView:{
    // marginRight: 10,
    // paddingVertical: 20,
    paddingRight: 20,
    paddingLeft:5,
},

  reviewBookSection:{
    backgroundColor: '#fff',
    width: '94%',
    marginLeft: '3%',
    padding: 15,
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'column'
  },

  reviewBookSectionTop:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  reviewBookSectionSecond:{
    display: 'flex',
    flexDirection: 'column'
  },

  reviewBookSectionAddressDetails:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  couponSection:{
    width: '94%',
    marginLeft: '3%',
    backgroundColor: '#fff',
    paddingVertical: 15, 
    borderRadius: 15,
    paddingHorizontal:15
  },

  couponInputSection:{
    borderWidth: 1,
    borderColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 5
  },

  couponInput: {
    flex: 1,
    fontSize: 16,
    padding: 3
  },

  couponApplyBtn:{
    backgroundColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 16,
    display:'flex',
    alignItems: 'center'
  },

  couponApplyBtnTxt:{
    fontSize: 14
  },


  paymentSection:{
    backgroundColor: '#fff',
    paddingVertical: 15,
    width: '94%',
    marginLeft: '3%',
    marginVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 15
  },

  paymentOptions:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    marginVertical: 10
  },

  payBtn: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 15
  },

  greenBackground: {
    backgroundColor: 'green',
    
  },

  purpleBackground: {
    backgroundColor: 'blue'
  },

  whiteTxt: {
    color: 'white'
  }
})
