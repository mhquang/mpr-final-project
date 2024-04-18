import { useContext, useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HowToPlayScreen from './screens/HowToPlayScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import IconButton from './components/ui/IconButton';
import * as SplashScreen from 'expo-splash-screen';
import SetupPlayerScreen from './screens/SetupPlayerScreen';

const Stack = createNativeStackNavigator();
function AuthStack() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate('HowtoPlay');
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1A1A1A" },
        headerTintColor: '#1A1A1A',
        contentStyle: { backgroundColor: "#1A1A1A" },
        headerRight: () => (
          <IconButton
            icon={'questioncircleo'}
            size={30}
            color={'#D3FD25'}
            onPress={handlePress}
          />
        )
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="HowtoPlay" component={HowToPlayScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1A1A1A" },
        headerTintColor: '#1A1A1A',
        contentStyle: { backgroundColor: "#1A1A1A" },
      }}
    >
      <Stack.Screen
        name="Setup"
        component={SetupPlayerScreen}
        options={{
          headerRight: () => (
            <IconButton
              icon={"logout"}
              color={'#D3FD25'}
              size={30}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: () => (
            <IconButton
              icon={"logout"}
              color={'#D3FD25'}
              size={30}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

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
