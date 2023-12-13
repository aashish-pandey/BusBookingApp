import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Login from './Login';



export default function Account({navigation}){

    
    return(
        <View style={styles.tabContent}>
            <Login navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    tabContent: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    }, 
    button: {
        backgroundColor: '#006DFB'
    }
})