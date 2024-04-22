import { StyleSheet, Text, View, Image } from "react-native";
import Item from "../components/ui/Item";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";


function HomeScreen() {
  const authCtx = useContext(AuthContext);
  const gender = authCtx.userData?.userGender;
  console.log(gender);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={gender === 'Male' ? require("../assets/images/Male/01.png") : require("../assets/images/Female/01.png")}
          style={[styles.image,
          {
            width: gender === 'Male' ? 200 : 320,
            height: gender === 'Male' ? 360 : 350
          }]}
        />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
  },
  image: {
    maxWidth: "80%",
    marginBottom: 30,
  },
  imageContainer: {
    flex: 1,
    marginTop: 30,
  }
});
