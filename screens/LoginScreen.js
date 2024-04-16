import { useContext, useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { login } from "../util/auth";
import {
  writeDataToFirestore,
  checkIfDocExist,
  getUserData,
} from "../util/firebase";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      const docExists = await checkIfDocExist("level", email);
      if (docExists) {
        const userData = await getUserData("level", email);
        authCtx.getUserData(userData);
        console.log(userData);
        console.log("Doc existed!");
      } else {
        await writeDataToFirestore("level", email, {
          level: 1,
          age: 1,
          name: email,
        });
        const userData = await getUserData("level", email);
        authCtx.getUserData(userData);
      }
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later!"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
