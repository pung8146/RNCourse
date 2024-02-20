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
        <FlatList
          data={currentGoals}
          renderItem={(itemData) => {
            itemData.index;
            return (
              <View style={styles.goalItem}>
                <Text>{itemData.item}</Text>
              </View>
            );
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
