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
      toggleListView: false,
      data: ""
    }
  }

  componentDidMount() {
    this.setState({
      data: [
        {
          key:
            "I was wondering how is the 21 spinner, opposed to the 22 expandable? And which new tote bag is more useful, the regular or multipurpose one?",
          answers: [
            {
              answer:
                "I ordered the spinner-disliked... smaller and you cannot place any forward weight-it will tip over..you have to place the weight on top of it and it doesn't glide easily...",
              votes: 0
            },
            {
              answer:
                "I got the spinner and wheel tread got completely worn after 6 months",
              votes: 0
            }
          ]
        },
        {
          key:
            "It’s snowing like crazy ! Hopefully I can fly out tomorrow for my standby that is at 3pm BUT if my flight is cancelled, what should I do ? Should I message my manager now and give her a heads up ?",
          answers: [
            {
              answer:
                " Yes, just let your manager know. It’s out of your control",
              votes: 0
            },
            {
              answer:
                "surely the commuter policy will kick in. take the time to read up on it and document everything. I'm not sure how a full fare ticket would fit in the commuter policy, but one FF ticket should trump two non rev flights.",
              votes: 0
            }
          ]
        },
        {
          key: "Can someone pls give me the number to professional standards?",
          answers: [
            {
              answer:
                "BOS 817.540.0108 ext. 8602 CLT 817.540.0108 ext. 8608 RDU 817.540.0108 ext. 8618 DCA-AA 817.540.0108 ext. 8604",
              votes: 0
            }
          ]
        },
        {
          key:
            "It’s snowing like crazy ! Hopefully I can fly out tomorrow for my standby that is at 3pm BUT if my flight is cancelled, what should I do ? Should I message my manager now and give her a heads up ?",
          answers: [
            {
              answer:
                " Yes, just let your manager know. It’s out of your control",
              votes: 0
            },
            {
              answer:
                "surely the commuter policy will kick in. take the time to read up on it and document everything. I'm not sure how a full fare ticket would fit in the commuter policy, but one FF ticket should trump two non rev flights.",
              votes: 0
            }
          ]
        },
        {
          key:
            "Does anyone have any ideas as to why the bid results for Dec or not in Jetnet/Flt Svc?",
          answers: [
            {
              answer: "they are in Decs and Crew Portal",
              votes: 0
            }
          ]
        }
      ]
    })
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
    backgroundColor: "#fcc"
  },
  listView: {},
  questionInput: {
    fontSize: 36
  }
})
