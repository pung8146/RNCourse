import React from "react"; // React를 임포트합니다.
import { View, Text, StyleSheet } from "react-native";

function GoalItem() {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
