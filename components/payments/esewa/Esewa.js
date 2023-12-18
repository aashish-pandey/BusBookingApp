import React from 'react'
import { TouchableOpacity, ScrollView, Text, Linking, View, Button, StyleSheet, Dimensions } from 'react-native'

export default function Esewa() {
    
    
      return (
        <View style={styles.main}>
          <TouchableOpacity style={styles.esewaBtn}>
            <Text style={styles.btnTxt}>Pay Via Esewa</Text>
          </TouchableOpacity>
        </View>
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
