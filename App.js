import { useContext, useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Colors } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons";

import HowToPlayScreen from "./screens/HowToPlayScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import IconButton from "./components/ui/IconButton";
import * as SplashScreen from "expo-splash-screen";
import SetupPlayerScreen from "./screens/SetupPlayerScreen";
import HomeScreen from "./screens/HomeScreen";
import LearningScreen from "./screens/LearningScreen";
import HealthScreen from "./screens/HealthScreen";
import WorkScreen from "./screens/WorkScreen";
import FriendsScreen from "./screens/FriendsScreen";
import RelaxScreen from "./screens/RelaxScreen";
import InvestmentScreen from "./screens/InvestmentScreen";
import Header from "./components/ui/Header";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function AuthStack() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("HowtoPlay");
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.background },
        headerTintColor: Colors.white,
        contentStyle: { backgroundColor: Colors.background },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitleStyle: { color: Colors.background },
          headerRight: () => (
            <IconButton
              icon={"questioncircleo"}
              size={24}
              color={Colors.white}
              onPress={handlePress}
            />
          ),
        }}
      />
      <Stack.Screen
        name="HowtoPlay"
        component={HowToPlayScreen}
        options={{
          title: "How to play?",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerTitleStyle: { color: Colors.background },
          headerBackVisible: false,
          headerRight: () => (
            <IconButton
              icon={"questioncircleo"}
              size={24}
              color={Colors.white}
              onPress={handlePress}
            />
          ),
        }}
      />
      <Stack.Screen name="Setup" component={SetupPlayerScreen} />
    </Stack.Navigator>
  );
}

function Authenticated() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: Colors.background },
      }}
    >
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen
        name="HowtoPlay"
        component={HowToPlayScreen}
        options={{
          title: "How to play?",
          headerBackTitleVisible: false,
          headerShown: true,
          headerStyle: { backgroundColor: Colors.background },
          headerShadowVisible: false,
          headerTintColor: Colors.white
        }}
      />
    </Stack.Navigator>
  );
}

function MainScreen() {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{ backgroundColor: Colors.background, paddingBottom: 80,}}
      screenOptions={{
        header: () => {
          return <Header />;
        },
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

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <Authenticated />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
      SplashScreen.hideAsync();
    }

    fetchToken();
  }, []);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  if (isTryingLogin) {
    return null;
  }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
