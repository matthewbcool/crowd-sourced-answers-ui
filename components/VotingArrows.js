import React from "react"
import { View, StyleSheet, TouchableOpacity, Text } from "react-native"

const VotingArrows = props => {
  return (
    <View style={styles.voteArrowContainer}>
      <TouchableOpacity>
        <Text>YA</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>NO</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  voteArrowContainer: {
    backgroundColor: "grey",
    width: 20
  }
})

export default VotingArrows
