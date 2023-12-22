import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function(){
    return(
        <View style={styles.tabContent}>
            <Text>Page Not found content</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tabContent:{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
})