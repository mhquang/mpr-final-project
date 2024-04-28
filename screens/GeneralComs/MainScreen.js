import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/styles";
import { getRandomAccidents } from "../../util/getRandomAccidents";
import { AuthContext } from "../../store/auth-context";
import { useContext, useEffect } from "react";
import { Alert } from "react-native";
import { accidents } from "../../data/accidents/dummy-accidents";

import LearningScreen from "../LearningScreen";
import HealthScreen from "../HealthScreen";
import WorkScreen from "../WorkScreen";
import FriendsScreen from "../FriendsScreen";
import RelaxScreen from "../RelaxScreen";
import InvestmentScreen from "../InvestmentScreen";
import HomeScreen from "../HomeScreen";

const BottomTab = createBottomTabNavigator();

export function MainScreen() {
  const authCtx = useContext(AuthContext);
  const age = authCtx.userData?.age;

  useEffect(() => {
    if (age === 4) {
      authCtx.updateMoney({ value: 10000 });
    }
    const randomNum = getRandomAccidents(1, 3);
    console.log(randomNum)
    // accidents.forEach((accident) => {
    //   if (accident.id === randomNum) {
    //     if (
    //       accident.title &&
    //       accident.description &&
    //       (accident.happiness || accident.health || accident.iq)
    //     ) {
    //       Alert.alert(accident.title, accident.description);
    //       authCtx.updateIndex({
    //         happiness: accident.happiness || 0,
    //         health: accident.health || 0,
    //         iq: accident.iq || 0,
    //       });
    //     } else {
    //       console.error(
    //         "Happiness, health, or IQ data is missing in accident:",
    //         accident
    //       );
    //     }
    //   }
    // });
    if (age > 100 || authCtx.userData?.health <= 0) {
      authCtx.resetLife();
      return;
    }
  }, [age]);

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{
        backgroundColor: Colors.background,
        paddingBottom: 80,
      }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: Colors.lightGray,
        tabBarActiveTintColor: Colors.white,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: Colors.black,
          marginBottom: 10,
          left: 20,
          right: 20,
          borderRadius: 40,
          paddingBottom: 0,
          height: 70,
          paddingHorizontal: 10,
          borderTopWidth: 0,
        },
      }}
    >
      <BottomTab.Screen
        name="Health"
        component={HealthScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="heart" color={color} size={focused ? 40 : 30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Work"
        component={WorkScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="briefcase" color={color} size={focused ? 40 : 30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Learning"
        component={LearningScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="book" color={color} size={focused ? 38 : 30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="person-circle"
              color={color}
              size={focused ? 45 : 30}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="people" color={color} size={focused ? 40 : 30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Relax"
        component={RelaxScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="happy" color={color} size={focused ? 40 : 30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Investment"
        component={InvestmentScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="wallet" color={color} size={focused ? 40 : 30} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default MainScreen;
