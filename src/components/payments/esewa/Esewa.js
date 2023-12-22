import React, { useEffect } from 'react'
import { TouchableOpacity, ScrollView, Text, Linking, View, Button, StyleSheet, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';


const html = `

<h1>This is a webview being developed for integrating esewa</h1>

`

export default function Esewa() {
  

  const handleClick = ()=>{
  }
    
      return (
          <WebView
            source={require('./index.html')}
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
