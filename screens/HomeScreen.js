import { StyleSheet, View, Image, ScrollView } from "react-native";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../store/auth-context";
import ScreenLayout from "./GeneralComs/ScreenLayout";
import { useFonts } from "expo-font";
import ItemListScreen from "./Homepage/ItemListScreen";
import PersonalInfo from "./Homepage/PersonalInfo";

function HomeScreen() {

  const authCtx = useContext(AuthContext);
  const [age, setAge] = useState(authCtx.userData?.age);
  useEffect(() => {
    const updateAge = () => {
      setAge((currentAge) => {
        if (currentAge < 100) {
          setTimeout(updateAge, 1000);
        }
        return currentAge < 100 ? currentAge + 1 : currentAge;
      });
    };
    updateAge();
  }, []);
  const gender = authCtx.userData?.userGender;
  const [fontsLoaded] = useFonts({
    UnboundedSemibold: require("../assets/fonts/Unbounded-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <ScreenLayout>
      <ScrollView>
        <View style={styles.rootContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={
                age < 5 && gender === 'Male' ? require("../assets/images/Male/01.png") : 
                age >= 5 && age < 16 && gender === 'Male' ? require("../assets/images/Male/02.png") : 
                age >= 16 && age < 22 && gender === 'Male' ? require("../assets/images/Male/03.png") : 
                age >= 22 && age < 37 && gender === 'Male' ? require("../assets/images/Male/04.png") :
                age >= 37 && age < 68 && gender === 'Male' ? require("../assets/images/Male/05.png") :
                age >= 68 && age <= 100 && gender === 'Male' ? require("../assets/images/Male/06.png") : 
                age < 5 && gender === 'Female' ? require("../assets/images/Female/01.png") : 
                age >= 5 && age < 16 && gender === 'Female' ? require("../assets/images/Female/02.png") : 
                age >= 16 && age < 22 && gender === 'Female' ? require("../assets/images/Female/03.png") : 
                age >= 22 && age < 37 && gender === 'Female' ? require("../assets/images/Female/04.png") :
                age >= 37 && age < 68 && gender === 'Female' ? require("../assets/images/Female/05.png") :
                age >= 68 && age <= 100 && gender === 'Female' ? require("../assets/images/Female/06.png") : null
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
          <View>
            <PersonalInfo />
          </View>
          <View style={styles.itemContainer}>
            <ItemListScreen />
          </View>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  image: {
    maxWidth: "80%",
    marginBottom: 30,
  },
  imageContainer: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
  },
  itemContainer: {
    flex: 1,
    marginTop: 20,
  },
});
