import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions, StyleSheet, ScrollView} from 'react-native'
export default function JourneyCard(){
    return(
        
        <ScrollView>
            <View style={styles.main}>
                <View style={styles.heading1}>
                    <Text style={styles.textHeading}>
                        Kathmandu
                    </Text>
                    <Text style={styles.duration}>
                        --- 6 hr 30 min ---
                    </Text>
                    <Text style={styles.textHeading}>
                        Pokhara
                    </Text>
                </View>
                <Text style={styles.textColor}>
                    This is a journey card and it has all the information about your upcoming journey
                </Text>

                <View style={styles.tripCardButton}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>More Details</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.downloadbutton]}>
                        <Text style={styles.buttonText}>Download Ticket</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    main:{
        backgroundColor : '#151515',
        minHeight: Dimensions.get('window').height*0.2,
        width: Dimensions.get('window').width*0.9,
        marginVertical: Dimensions.get('window').height * 0.01,
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 20,
        padding: 20
    },

    heading1:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginBottom: 30
    },

    textHeading: {
        color: '#fff',
        fontSize: 20
    },

    duration: {
        color: '#fff',
        fontSize: 15
    },

    textColor: {
        color: '#fff',
        fontSize: 15
    },
    tripCardButton:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: '#006DFB',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 6,
        marginTop: 20
      },

    buttonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    downloadbutton: {
        backgroundColor : '#FFA500'
    },
})