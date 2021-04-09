import React from 'react;
import { View, ScrollView, StyleSheet } from 'react-native'

class App extends Components {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
  }
  render() {
    return (
      <View style={style.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={style.content}></ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App;