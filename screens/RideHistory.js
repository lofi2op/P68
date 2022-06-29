import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class RideHistoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Ride History</Text>
        <Image style={styles.image} source={require('../assets/appIcon.png')}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccd1e8"
  },
  text: {
    color: "#62688a",
    fontSize: 35,
    fontFamily:'S'
  },
  image:{
    marginTop:20,
    width:75,
    height:75,
    justifyContent:"center",
  }
});
