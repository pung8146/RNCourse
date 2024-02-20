import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

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
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View>
        <ScrollView>
          {currentGoals.map((goal) => (
            <Text key={goal}>{goal}</Text>
          ))}
        </ScrollView>
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
