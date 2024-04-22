import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Children } from "react";

function Title({ children }) {
    return (
        <View style={styles.container}>
            <Ionicons
                name="water-outline"
                size={20}
                color={'white'}
            />
            <Text style={styles.title}>
                {children}
            </Text>
            <Ionicons
                name="water-outline"
                size={20}
                color={'white'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    }
});

export default Title;