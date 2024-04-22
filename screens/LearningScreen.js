import { Text, View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

function LearningScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Learning Screen</Text>
      <Progress.Bar progress={0.3} width={200} />
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

export default LearningScreen;