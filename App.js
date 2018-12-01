import React, { Component } from "react"
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  KeyboardAvoidingView,
  TextInput
} from "react-native"
import Card from "./components/Card"
import getQuestions from "./QuestionsApi"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      toggleListView: true,
      data: [
        {
          key: "",
          answers: []
        }
      ]
    }
  }

  componentDidMount() {
    this.setState({
      data: getQuestions()
    })
  }
  handleQuestionTouch = () => {
    console.log("loading a sick animation!")
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
              data={this.state.data}
              renderItem={({ item }) => (
                <Card handleTouch={this.handleQuestionTouch} data={item.key} />
              )}
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
    backgroundColor: "#fff"
  },
  listView: {},
  questionInput: {
    fontSize: 36
  }
})
