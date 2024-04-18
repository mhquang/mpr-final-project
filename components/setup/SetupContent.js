import { useState } from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';

import SetupUser from './SetupUser';

function SetupContent({ onSetup }) {

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    userName: false,
  });

  function submitHandler(credentials) {
    let { userName } = credentials;

    userName = userName.trim();

    const userNameIsValid = userName.length > 3;

    if (
      !userNameIsValid
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        userName: !userNameIsValid,
      });
      return;
    }
    onSetup({ userName });
  }

  return (
    <View style={styles.authContent}>
      <View style={styles.loginContainer}>
        <Text style={styles.login}>
          Setup
        </Text>
      </View>
      <SetupUser
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
    </View>
  );
}

export default SetupContent;

const styles = StyleSheet.create({
  authContent: {
    flex: 1,
    marginHorizontal: 32,
    padding: 10,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
  loginContainer: {
    alignItems: 'center',
    paddingVertical: 85,
  },
  login: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold'
  }
});
