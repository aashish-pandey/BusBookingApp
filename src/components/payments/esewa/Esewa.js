import React, { useEffect, useRef } from 'react'
import { TouchableOpacity, ScrollView, Text, Linking, View, Button, StyleSheet, Dimensions, NativeModules } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import base64 from 'react-native-base64';




export default function Esewa() {
  

  const handleClick = async()=>{
    const total_amount = "100";
    const transaction_uuid = "11-200-111sss1";
    const product_code = "EPAYTEST";
    const secret = "8gBm/:&EnhH.1/q";
    const msg = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
    const secretKey = `${secret}`;
    
    // JSHmac("aashish", "aashish", CONSTANTS.HmacAlgorithms.HmacSHA256)
    // .then(hash => {
    //   var nw = base64.encode(hash);
    //   console.log(nw)})
    // .catch(e => console.log(e));

  }



    
      return (
          <WebView
            source={{uri: "https://aashish-pandey.github.io/EsewaRedirectLogin/?amount=150&tax_amount=0&product_code=EPAYTEST&secret=8gBm/:%26EnhH.1/q"}}
            
          />

          
      );


 
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height
  },

  esewaBtn: {
    backgroundColor :'green', 
    padding: 20
  },

  btnTxt: {
    color: 'white',
    fontSize: 20
  }
})
