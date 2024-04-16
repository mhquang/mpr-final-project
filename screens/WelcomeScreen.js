import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMesssage] = useState("");
  const [error, setError] = useState(null);

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  // useEffect(() => {
  //   async function addToFirestore() {
  //     await writeDataToFirestore('level', token, {
  //       level: 1,
  //       age: 1,
  //       name: "uuuuuuu"
  //     })
  //   }
  //   addToFirestore();
  // }, []);

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          An error occurred while fetching data: {error.message}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={{ color: "white" }}>You authenticated successfully!</Text>
      <Text style={{ color: "white" }}>Email: {authCtx.userData?.name}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
  },
});
