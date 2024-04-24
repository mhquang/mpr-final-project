import { StyleSheet, Text, View, Image } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import ScreenLayout from "./GeneralComs/ScreenLayout";
import { useFonts } from "expo-font";

function HomeScreen() {
  const [fontsLoaded] = useFonts({
    UnboundedSemibold: require("../assets/fonts/Unbounded-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  const authCtx = useContext(AuthContext);
  const gender = authCtx.userData?.userGender;

  return (
    <ScreenLayout>
      <View style={styles.rootContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={
              gender === "Male"
                ? require("../assets/images/Male/01.png")
                : require("../assets/images/Female/01.png")
            }
            style={[
              styles.image,
              {
                width: gender === "Male" ? 200 : 320,
                height: gender === "Male" ? 360 : 350,
              },
            ]}
          />
        </View>
        <View></View>
      </View>
    </ScreenLayout>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    maxWidth: "80%",
    marginBottom: 30,
  },
  imageContainer: {
    flex: 1,
    marginTop: 30,
  },
});
