import React from "react"
import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import VotingArrows from "./VotingArrows"

const Card = props => {
  return (
    <View style={styles.mainCard}>
      <VotingArrows numberOfVotes={props.numberOfVotes} />
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
    borderWidth: 3,
    borderRadius: 4,
    borderColor: "#eaeaea"
  },
  questionText: {
    fontSize: 20
  }

  //add elevation for android drop shadow effect
})
