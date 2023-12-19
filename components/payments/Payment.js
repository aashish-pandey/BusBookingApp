import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, Alert } from 'react-native'

export default function Payment() {

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

   
  return (
    <ScrollView>
        <Text>Welcome</Text>

        <TouchableOpacity onPress={handleEsewa}>
            <Text>Click me to use esewa to pay</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}
