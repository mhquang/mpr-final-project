import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/styles";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function HowToPlayScreen() {
  const [fontsLoaded] = useFonts({
    Oddval: require("../../assets/fonts/oddval.semibold.ttf"),
    NTSomicMedium: require("../../assets/fonts/NTSomic-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>I AM A DEVELOPER</Text>
      <View style={{ padding: 1 }}></View>
      <ScrollView>
        <Text style={styles.text}>
          “I am a developer” is an interactive entertainment app designed to
          simulate the journey of becoming a successful developer. Users start
          from infancy and progress through various life stages, learning
          subjects ranging from mathematics, literature, etc. to modern
          programming languages, frameworks, or other IT fields. The game
          operates on a time scale where each year in the game equates to 12
          minutes in real life, offering a dynamic and engaging experience.
        </Text>
        <Text></Text>
        <Text style={styles.text}>
          In this game, you will be the main character starting from level 0
          corresponding to the 0 age of the character in the game. You can also
          skip the first 5 years since there is nothing to do or to learn during
          this period.
        </Text>
        <Text></Text>
        <Text style={styles.text}>
          You will have to go through educational levels corresponding to
          real-life educational levels such as primary school, secondary school,
          high school and university. Make smart decisions to manage your
          finances, balance your health and happiness, and social interactions.
          At age 18, you will receive $10,000 from your parents and must make
          important life decisions such as education, employment, housing,
          relationships, etc. Various features are unlocked when the player
          reaches a certain age or fulfills certain conditions, adding depth to
          the gaming experience.
        </Text>
        <Text></Text>
        <Text style={styles.text}>
          In the game, random situations or unexpected accidents will appear
          that will be detrimental to you. Therefore, always make sure that the
          attributes are always balanced at a level that is not too low.
          Especially health, if your health drops to 0, the game will end.
        </Text>
        <Text></Text>
        <Text style={styles.text}>
          Your character will have the following attributes:
        </Text>
        <Text style={styles.text}>
          <Ionicons name="heart" color={Colors.redHealth} size={15} />{" "}
          <Text style={{ fontWeight: "bold" }}>Heart</Text> - Measures your
          physical health. This is affected by your diet, age and activities.
          Your health will decline as you age, no ones lives forever
        </Text>
        <Text></Text>
        <Text style={styles.text}>
          <Ionicons name="happy" color={Colors.yellowHappiness} size={15} />{" "}
          <Text style={{ fontWeight: "bold" }}>Happiness</Text> - Measures your
          happiness, reduced by events and over working. You will commit suicide
          if your happiness is zero for too long. Let's take part in outside
          activities and interact with friends to increase happiness.
        </Text>
        <Text></Text>
        <Text style={styles.text}>
          <FontAwesome6 name="brain" color={Colors.blueIQ} size={15} />{" "}
          <Text style={{ fontWeight: "bold" }}>IQ</Text> - Measure your
          intelligence level. If you have a high level of intelligence you can
          study or do the jobs you want. Intelligence levels can decrease as you
          get older or work in unsuitable jobs.
        </Text>
        <Text></Text>
        <Text style={styles.text}>
          <Ionicons name="cash" color={Colors.lightGreen} size={15} />{" "}
          <Text style={{ fontWeight: "bold" }}>Money</Text> - Shows how much
          money you own. Only money you own can be directly used for actions.
        </Text>
        <Text></Text>
        <Text style={styles.text}>
          <MaterialIcons name="savings" color={"pink"} size={17} />{" "}
          <Text style={{ fontWeight: "bold" }}>Saving Money</Text> - Shows how
          much money is in your bank. While the money in your bank cannot be
          directly used, it will generate interest.
        </Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  header: {
    fontFamily: "Oddval",
    color: "white",
    fontSize: 30,
  },
  text: {
    fontFamily: "NTSomicMedium",
    color: "white",
    fontSize: 18,
  },
});

export default HowToPlayScreen;
