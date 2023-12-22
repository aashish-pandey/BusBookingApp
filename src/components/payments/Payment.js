import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, Alert, BackHandler, AppState } from 'react-native'

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
    <ScrollView>
        <Text>Welcome</Text>

        <TouchableOpacity onPress={handleEsewa}>
            <Text>Click me to use esewa to pay</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}
