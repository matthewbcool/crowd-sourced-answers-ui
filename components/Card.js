import React from "react"
import { View, StyleSheet, TouchableOpacity, Text } from "react-native"

const Card = props => {
  return (
    <View style={styles.mainCard}>
      <TouchableOpacity onPress={props.handleTouch}>
        <Text style={styles.questionText}>{props.data}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  mainCard: {
    marginVertical: 10,
    marginHorizontal: 5,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 2.5,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.2)"
  },
  questionText: {
    fontSize: 20
  }

  //add elevation for android drop shadow effect
})
