import React, { Component } from "react"
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  KeyboardAvoidingView,
  TextInput
} from "react-native"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      toggleListView: false
    }
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <TextInput
          style={styles.questionInput}
          placeholder="Ask a question"
          onChangeText={text => {
            this.setState({ text })
            if (this.state.text.length > 5) {
              this.setState({ toggleListView: true })
            }
          }}>
          <Text>{this.state.text}</Text>
        </TextInput>
        {this.state.toggleListView ? (
          <View style={styles.listView}>
            <FlatList
              data={[
                { key: "Devin" },
                { key: "Jackson" },
                { key: "James" },
                { key: "Joel" },
                { key: "John" },
                { key: "Jillian" },
                { key: "Jimmy" },
                { key: "Julie" }
              ]}
              renderItem={({ item }) => <Text>{item.key}</Text>}
            />
          </View>
        ) : null}
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#c6c6c6"
  },
  listView: {},
  questionInput: {
    fontSize: 36
  }
})
