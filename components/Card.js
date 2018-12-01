import React from "react"
import { View, StyleSheet, Text } from "react-native"

const Card = props => {
  return (
    <View style={styles.mainCard}>
      <Text>{props.data}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  mainCard: {
    marginVertical: 5,
    marginHorizontal: 5,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.2)",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
    //add elevation for android drop shadow effect
  }
})
