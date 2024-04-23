import { StyleSheet, View, Text, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import IndexText from "./TextIndex";

function FriendItem({ name, age, hobbies, gender, happiness, health, iq }) {
    const [fontsLoaded] = useFonts({
        NTSomicMedium: require("../../assets/fonts/NTSomic-Medium.ttf"),
        UnboundedSemibold: require("../../assets/fonts/Unbounded-SemiBold.ttf"),
        UnboundedMedium: require("../../assets/fonts/Unbounded-Medium.ttf"),
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.itemContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.nameContainer}>
                <Text style={styles.titleText}>Name: </Text>
                <Text style={styles.title}>{name}</Text>
                </View>
                <Pressable
                    style={({ pressed }) => [
                        styles.applyButton,
                        pressed && styles.pressed,
                    ]}
                >
                    <Text style={styles.apply}>Add Friend</Text>
                </Pressable>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.requireContainer}>
                    <Text style={styles.titleText}>Hobbies:</Text>
                    {hobbies.map((hobby, index) => (
                        <Text key={index} style={styles.require}>
                            - {hobby}
                        </Text>
                    ))}
                </View>

                <View style={styles.timeContainer}>
                    {/* <Ionicons name="time-outline" size={20} /> */}
                    <Text style={styles.titleText}>Age:</Text>
                    <Text style={styles.age}>{age}</Text>
                </View>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.indexContainer}>
                    {health && (
                        <>
                            <IndexText isIncrease={health.isIncrease}>
                                {health.index}
                            </IndexText>
                            <Ionicons name="heart" color={Colors.redHealth} size={20} />
                        </>
                    )}
                    {iq && (
                        <>
                            <IndexText isIncrease={iq.isIncrease}>{iq.index}</IndexText>
                            <FontAwesome6 name="brain" color={Colors.blueIQ} size={20} />
                        </>
                    )}
                    {happiness && (
                        <>
                            <IndexText isIncrease={happiness.isIncrease}>
                                {happiness.index}
                            </IndexText>
                            <Ionicons name="happy" color={Colors.yellowHappiness} size={20} />
                        </>
                    )}
                </View>

                <Text style={styles.money}>{gender}</Text>
            </View>
        </View>
    );
}

export default FriendItem;

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: Colors.item,
        marginHorizontal: 10,
        width: "90%",
        padding: 20,
        borderRadius: 20,
        height: 200,
        justifyContent: "space-between",
        maxHeight: 200,
        marginTop: 10,
        width: 380,
    },

    innerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    title: {
        fontFamily: "UnboundedMedium",
        fontSize: 16,
        flex: 1,
        color: Colors.black,
    },

    applyButton: {
        backgroundColor: Colors.blueIQ,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },

    apply: {
        fontFamily: "NTSomicMedium",
        fontSize: 16,
        color: Colors.darkBlue,
    },

    requireContainer: {
        flex: 1,
    },
    require: {
        fontFamily: "NTSomicMedium",
        fontSize: 13,
    },

    timeContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    age: {
        marginLeft: 5,
        fontFamily: "UnboundedMedium",
        fontSize: 16,
    },

    indexContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: 150,
    },

    money: {
        fontFamily: "UnboundedSemibold",
        fontSize: 18,
    },
    pressed: {
        opacity: 0.7,
    },
    titleText: {
        fontFamily: "UnboundedMedium",
        color: Colors.black,
        fontSize: 16
    },
    nameContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
});
