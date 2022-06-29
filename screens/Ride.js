import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class RideScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Rent A Ride</Text>
        <Image style={styles.image} source={require('../assets/bicycle.png')}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#62688a',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    color: "#ccd1e8",
    fontSize: 35,
    fontFamily: 'S',
  },
  image:{
    width:100,
    height:100,
    justifyContent:"center",
  }

});
