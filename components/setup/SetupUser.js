import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../ui/Button';
import Input from '../Auth/Input';

function SetupUser({ onSubmit, credentialsInvalid }) {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredGender, setEnteredGender] = useState('');

    const {
        userName: userNameIsValid,
    } = credentialsInvalid;

    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'userName':
                setEnteredUserName(enteredValue);
                break;
        }
    }

    function submitHandler() {
        onSubmit({
            userName: enteredUserName,
        });
    }

    return (
        <View style={styles.form}>
            <View>
                <Input
                    label="Playername"
                    onUpdateValue={updateInputValueHandler.bind(this, 'userName')}
                    value={enteredUserName}
                    isInvalid={userNameIsValid}
                    keyboardType="default"

                />
                <View style={styles.buttons}>
                    <Button onPress={submitHandler}>
                        Start now
                    </Button>
                </View>
            </View>
        </View>
    );
}

export default SetupUser;

const styles = StyleSheet.create({
    buttons: {
        marginTop: 12,
    },
});
