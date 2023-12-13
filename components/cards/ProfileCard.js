import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

export default function ProfileCard({navigation}){

  const handleLogout = ()=>{
    navigation.popToTop();
  }
  // Sample user data
  const userData = {
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    email: 'johndoe@example.com',
    dateOfBirth: 'January 1, 1990',
    completedTrips: 20,
    missedTrips: 3,
    canceledTrips: 5,
  };

  return (
    <View style={styles.main}>
    <View style={styles.card}>
        <View style={styles.topHeading}>
            <Text style={[styles.text, styles.title]}>My Profile</Text>
            <TouchableOpacity>
                <Text style={[styles.text, styles.edit]}>Edit</Text>
            </TouchableOpacity>
        </View>
      <View style={styles.info}>

        <View style={styles.text}>
            <Text style={styles.valueDesignation}>
                Name
            </Text>

            <Text style={styles.value}>
                {userData.name}
            </Text>
        </View>
        <View style={styles.text}>
            <Text style={styles.valueDesignation}>
                Phone Number
            </Text>
            <Text style={styles.value}>
                {userData.phoneNumber}
            </Text>
        </View>
        <View style={styles.text}>
            <Text style={styles.valueDesignation}>
                    Email
                </Text>
            <Text style={styles.value}>
                {userData.email}
            </Text>
        </View>
        <View style={styles.text}>
            <Text style={styles.valueDesignation}>
                DOB
            </Text>
 
            <Text style={styles.value}>
                {userData.dateOfBirth}
            </Text>
        </View>

        <TouchableOpacity style={[styles.button, styles.completedbutton]}>
            <Text style={styles.buttonText}>Total Completed Trips: {userData.completedTrips}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.downloadbutton]}>
            <Text style={styles.buttonText}>Total Missed Trips: {userData.missedTrips}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cancelledbutton]}>
            <Text style={styles.buttonText}>Total Canceled Trips: {userData.canceledTrips}</Text>
        </TouchableOpacity>
        {/* <Text style={styles.text}>Total Completed Trips: {userData.completedTrips}</Text>
        <Text style={styles.text}>Total Missed Trips: {userData.missedTrips}</Text>
        <Text style={styles.text}>Total Canceled Trips: {userData.canceledTrips}</Text> */}
      </View>
        
    </View>

    <View>

    </View>
    <TouchableOpacity style={[styles.button, styles.logoutbutton]} onPress={handleLogout}>
            <Text style={[styles.buttonText, styles.boldText]}>Logout</Text>
        </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.deletebutton]}>
            <Text style={[styles.buttonText, styles.boldText]}>Delete Account</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    // minHeight: Dimensions.get('window').height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },

  card: {
    backgroundColor: '#151515',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: Dimensions.get('window').width * 0.9,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  topHeading:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  edit:{
    color: '#999'
  },
  info: {
    fontSize: 16,
  },

  text: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  value: {
    fontSize: 15,
    color: '#fff',
  },
  valueDesignation: {
    fontSize: 20,
    color: '#fff',
  },
  button: {
    backgroundColor: '#006DFB',
    paddingVertical: 10,
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

deletebutton : {
    backgroundColor: '#D32F2F',
    
},
boldText:{
    fontSize: 20,
},
completedbutton:{
    backgroundColor: '#4CAF50'
},
cancelledbutton:{
    backgroundColor: '#006DFB'
},
logoutbutton:{
    backgroundColor: '#004080',
    paddingVertical: 25,
    paddingHorizontal: 50

}

});

