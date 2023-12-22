import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import React from 'react'


import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { showPage } from '../store/slices/pageSlice';



export default function MainBottomBar() {

    const dispatch = useDispatch();

    const selectedPage = useSelector((state)=>{
        return state.page;
      });
    

    const showScreenPage = (page)=>{
        dispatch(showPage(page));
    }


    return (
        <View style={styles.bottomNav}>
            <TouchableOpacity onPress={() => { showScreenPage('home') }} style={styles.tab}>
                <Icon name="home" size={35} color={selectedPage === 'home' ? '#FD6905' : '#888'} />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => setSelectedTab('map')} style={styles.tab}>
    <Icon name="map" size={35} color={selectedTab === 'map' ? '#006DFB' : '#242424'}/>
  </TouchableOpacity> */}
            <TouchableOpacity onPress={() => showScreenPage('bookings')} style={styles.tab}>
                <Icon name="book" size={35} color={selectedPage === 'bookings' ? '#FD6905' : '#888'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => showScreenPage('account')} style={styles.tab}>
                <Icon name="user" size={35} color={selectedPage === 'account' ? '#FD6905' : '#888'} />
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: "#fff",
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#E2FFE7',
      // top: 0,
      bottom: 5,
      paddingVertical: 20,
      width: Dimensions.get('screen').width * 0.98,
      marginLeft: Dimensions.get('screen').width * 0.01,
      borderRadius: 40,
      position: 'absolute'
    },
  
    tab: {
      alignItems: 'center',
    },
    tabContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });