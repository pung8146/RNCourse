import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hello World!</Text>
      </View>
      <Text
        style={{ margin: 14, borderWidth: 2, borderColor: "red", padding: 16 }}
      >
        Hello 2
      </Text>
      <Button title="Press me" onPress={() => alert("Button pressed")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
