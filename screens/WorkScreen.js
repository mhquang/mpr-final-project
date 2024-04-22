import { Text, View, StyleSheet } from "react-native";

function WorkScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Work Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default WorkScreen;
