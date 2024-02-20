import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";

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
        <FlatList
          data={currentGoals}
          renderItem={(itemData) => {
            return <GoalItem />;
          }}
          alwaysBounceVertical={false}
        />
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
