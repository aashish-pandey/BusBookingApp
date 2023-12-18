import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Payment() {

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
