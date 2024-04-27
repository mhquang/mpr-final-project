import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import IndexText from "../IndexText";
import { AuthContext } from "../../../store/auth-context";
import { useContext } from "react";
import Button from "../Button";
function FriendItem({ name, age, hobbies, gender, happiness }) {
  const authCtx = useContext(AuthContext);
  const isFriend = authCtx.userData?.friends.includes(name);
  const isDifferentGender = authCtx.userData?.userGender !== gender;
  const friendHandler = () => {
    if(name) {
      authCtx.updateFriends(name);
      authCtx.updateIndex({
        happiness: 1,
      });
    }
  };
  const unFriendHandler = () => {
    if(name) {
      authCtx.removeFriends(name);
      authCtx.updateIndex({
        happiness: -2,
      });
    }
  };
  const dateFriendHandler = () => {
    if(name) {
      authCtx.dateFriends(name);
      authCtx.updateIndex({
        happiness: 5,
      });
    }
  };
  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../../assets/fonts/NTSomic-Medium.ttf"),
    UnboundedSemibold: require("../../../assets/fonts/Unbounded-SemiBold.ttf"),
    UnboundedMedium: require("../../../assets/fonts/Unbounded-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.name}>Name: {name}</Text>
        <Button 
          children={isFriend ? "Unfriend" : "Add Friend"}
          onPress={isFriend ? unFriendHandler : friendHandler}
        />
        {isDifferentGender && isFriend && <Button 
          children={'Date'}
          onPress={dateFriendHandler}
        />}
      </View>

      <View style={styles.innerContainer2}>
        <View style={styles.informationContainer}>
          <View style={styles.ageAndGenderContainer}>
            <Text style={styles.inforText}>Age: {age}</Text>
            <Text style={styles.inforText}>{gender}</Text>
          </View>

          <Text style={styles.title}>Hobbies:</Text>
          {hobbies.map((hobby, index) => (
            <Text key={index} style={styles.hobby}>
              - {hobby}
            </Text>
          ))}
        </View>
        <View style={styles.indexContainer}>
          <IndexText isIncrease={happiness.isIncrease}>
            {happiness.index}
          </IndexText>
          <Ionicons name="happy" color={Colors.yellowHappiness} size={25} />
        </View>
      </View>
    </View>
  );
}

export default FriendItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.item,
    marginHorizontal: 20,
    width: "90%",
    padding: 20,
    borderRadius: 20,
    maxHeight: 200,
    marginTop: 10,
  },

  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontFamily: "UnboundedMedium",
    color: Colors.black,
    fontSize: 23,
  },

  addFriendButton: {
    backgroundColor: Colors.blueIQ,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  btn: {
    fontFamily: "NTSomicMedium",
    fontSize: 16,
    color: Colors.darkBlue,
  },

  innerContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 5,
  },

  informationContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
  },

  ageAndGenderContainer: {
    flexDirection: "row",
    marginBottom: 8
  },

  inforText: {
    fontFamily: "UnboundedMedium",
    color: Colors.black,
    fontSize: 18,
    marginRight: 30
  },

  title: {
    fontFamily: "NTSomicMedium",
    fontSize: 18,
    color: Colors.black,
  },

  hobby: {
    fontFamily: "NTSomicMedium",
    fontSize: 16,
  },

  indexContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },

  pressed: {
    opacity: 0.7,
  },
});
