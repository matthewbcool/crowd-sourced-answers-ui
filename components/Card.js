import React from "react"
import { View, StyleSheet, Text } from "react-native"

const Card = props => {
  return (
    <View style={styles.mainCard}>
      <Text>{props.data.map(item => item.key)}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  mainCard: {
    borderColor: "black",
    borderWidth: 3
  }
})
