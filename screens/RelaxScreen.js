import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SportsScreen from './SportsScreen';
function RelaxScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.sportsScreenContainer}>
                    <SportsScreen />
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    sportsScreenContainer: {
        flex: 1,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default RelaxScreen;