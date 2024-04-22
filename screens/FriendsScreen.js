import { View, Text, StyleSheet } from 'react-native';

function FriendsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Friends Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default FriendsScreen;