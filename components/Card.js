import React from "react"
import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import VotingArrows from "./VotingArrows"

const Card = props => {
  return (
    <View style={styles.mainCard}>
      <VotingArrows />
      <TouchableOpacity onPress={props.handleTouch}>
        <Text style={styles.questionText}>{props.data}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  mainCard: {
    flexDirection: "row",
    height: 150,
    marginBottom: 10,
    paddingTop: 2,
    paddingBottom: 2,
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
