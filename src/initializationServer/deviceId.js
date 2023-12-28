import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import DeviceInfo from 'react-native-device-info';


export default function deviceId() {

    useEffect(()=>{
        const deviceId = DeviceInfo.getUniqueId();

        console.log(deviceId)
            
    }, [])
  return (
    <View>
    </View>
  )
}