import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [currentGoals, setCurrentGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    setCurrentGoals((currentGoals) => [...currentGoals, enteredText]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.InputContainer}>
        <TextInput placeholder="Input Text" onChangeText={goalInputHandler} />
        <Button title="Add"></Button>
      </View>
      <View>
        {currentGoals.map((goal) => (
          <Text>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  InputContainer: {
    flexDirection: "row",
  },
});
