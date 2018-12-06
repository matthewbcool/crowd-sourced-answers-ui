import React from "react"
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Text
} from "react-native"
import Icon from "react-native-vector-icons/Feather"

const VotingArrows = props => {
  const upVote = (
    <Icon name="chevron-up" size={45} color="#900" style={styles.voteArrows} />
  )
  const downVote = (
    <Icon
      name="chevron-down"
      size={45}
      color="#900"
      style={styles.voteArrows}
    />
  )
  //const AnimatedIcon = Animated.createAnimatedComponent(upVote)
  return (
    <View style={styles.voteArrowContainer}>
      <TouchableOpacity>{upVote}</TouchableOpacity>
      <View style={styles.voteNumberBox}>
        <Text>5</Text>
      </View>
      <TouchableOpacity>{downVote}</TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  voteArrowContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eaeaea",
    width: 40,
    marginBottom: -3,
    marginTop: -3,
    marginRight: 5
  },
  voteArrows: {
    paddingRight: 5
  },
  voteNumberBox: {
    borderColor: "#900",
    borderWidth: 10
  }
})

export default VotingArrows
