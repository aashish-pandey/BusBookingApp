import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Button,
  Platform,
  ScrollView,
  Pressable,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import JourneyCard from "./cards/JourneyCard";
import MainBottomBar from "./MainBottomBar";
import axios from "axios";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Home({ navigation }) {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [statusDatePicker, setStatusDatePicker] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState("");
  const [activeButton, setActiveButton] = useState(null);
  const inputRef = useRef(null);

  const handleSearch = async () => {
    console.log("Searching for:", {
      singleTrip: true,
      fromLocation,
      toLocation,
      date,
    });
    try {
      const response = await axios.post("http://localhost:3000/");
      console.log(response);

      navigation.navigate("busSearch");
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Cannot search for the entered values at the moment! please try again later"
      );
    }
  };

  const handleSwapLocations = () => {
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  const toggleDatePicker = () => {
    setStatusDatePicker(!statusDatePicker);
  };

  const onDateChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
    }
    toggleDatePicker();
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    setActiveButton("allday");
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    const currentDate = selectedDate || date;
    hideDatePicker();
    setDate(formatDate(currentDate));
  };

  const formatDate = (date) => {
    // Format the date to a readable format
    // Example: 2021-05-18
    return date.toISOString().split("T")[0];
  };

  const setToday = () => {
    setDate(formatDate(new Date())); // Sets the current date
    setActiveButton("today");
  };

  const setTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Adds one day
    setDate(formatDate(tomorrow));
    setActiveButton("tomorrow");
  };

  const handlePressOutside = () => {};

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <>
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text style={styles.greenText}>Mero</Text>
            <Text style={styles.blackText}>Bus</Text>
          </View>
          <View style={styles.bellContainer}>
            <View style={styles.bellOutline}>
              <Icon name="bell" size={20} color="black" />
            </View>
          </View>
        </View>

        <ScrollView>
          <View style={styles.mainStart}>
            <View style={styles.middleView}>
              <View style={styles.heroImage}></View>
              <View>
                <Text style={styles.heroText}>Get your ticket easily</Text>
                <View style={styles.heroTextView2}>
                  <Text style={styles.heroText}>from</Text>
                  <Text
                    style={[styles.greenText, styles.heroText, styles.logoText]}
                  >
                    Mero
                  </Text>
                  <Text style={styles.heroText}>Bus!</Text>
                </View>
              </View>
            </View>

            <View style={styles.formView}>
              <View style={styles.container}>
                <View style={styles.inputGroup}>
                  <View style={[styles.iconView, styles.icon1]}>
                    <Icon
                      name="location-arrow"
                      size={20}
                      color="#FD6905"
                      style={styles.icon}
                    />
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="From"
                    value={fromLocation}
                    onChangeText={(text) => setFromLocation(text)}
                  />
                </View>

                <View style={styles.inputGroup}>
                  <View style={[styles.iconView, styles.icon2]}>
                    <Icon
                      name="map-marker"
                      size={20}
                      color="#129C38"
                      style={styles.icon}
                    />
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="Destination"
                    value={toLocation}
                    onChangeText={(text) => setToLocation(text)}
                  />
                  <TouchableOpacity
                    onPress={handleSwapLocations}
                    style={styles.swapButton}
                  >
                    <Icon
                      name="exchange"
                      size={30}
                      color="#FD6905"
                      style={styles.rotatedIcon}
                    />
                  </TouchableOpacity>
                </View>

                <View style={[styles.inputGroup, styles.dateInput]}>
                  <Icon
                    name="calendar"
                    size={20}
                    color="orange"
                    style={styles.icon}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Date"
                    value={date}
                    onFocus={() => showDatePicker()}
                  />
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                </View>

                <View style={styles.buttonContainer}>
                  <Button
                    color={activeButton === "today" ? "green" : "gray"}
                    title="Today"
                    onPress={setToday}
                  />
                  <Button
                    color={activeButton === "tomorrow" ? "green" : "gray"}
                    title="Tomorrow"
                    onPress={setTomorrow}
                  />
                </View>

                <TouchableOpacity
                  onPress={handleSearch}
                  style={styles.searchButton}
                >
                  <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <MainBottomBar />
      </>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: Dimensions.get("screen").width,
    position: "relative",
    top: 0,
  },

  mainStart: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'white',
    height: Dimensions.get("screen").height * 0.9,
  },

  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  greenText: {
    color: "#129C38",
    fontWeight: "bold",
    fontSize: 20,
  },
  blackText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  bellContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  bellOutline: {},

  middleView: {
    height: Dimensions.get("window").height * 0.25,
  },

  heroImage: {
    height: Dimensions.get("window").height * 0.15,
  },

  heroText: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "normal",
    marginRight: 5,
  },

  logoText: {
    marginRight: 0,
  },
  heroTextView2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  formView: {
    backgroundColor: "#F0F0F0",
    padding: 20,
    borderRadius: 28,
    marginBottom: 200,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 25,
  },

  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    borderWidth: 3,
    borderTopWidth: 0,
    borderTopRightRadius: 0,
    borderLeftWidth: 0,
    borderRightWidth: 1,
    borderColor: "#f1f1f1",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    padding: 8,
  },
  icon: {
    padding: 10,
  },
  iconView: {
    borderRadius: 12,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },

  icon1: {
    backgroundColor: "#FFF2E2",
  },
  icon2: {
    backgroundColor: "#E2FFE7",
  },
  searchButton: {
    backgroundColor: "#FD6905",
    borderRadius: 8,
    padding: 12,
    paddingVertical: 10,
    // marginTop: 20,
    alignItems: "center",
    marginVertical: 20,
  },
  dateInput: {
    backgroundColor: "#F6F5FA",
  },
  searchButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },

  swapButton: {
    position: "absolute",
    backgroundColor: "#F0F0F0",
    top: -50,
    right: 0,
    bottom: 60,
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  rotatedIcon: {
    transform: [{ rotate: "90deg" }],
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
    paddingVertical: 10,
  },
});
