import { View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import { friends } from "../data/dummy-friends";
import FriendItem from "../components/ui/FriendItem";

function FriendListScreen() {
    return (
        <View style={styles.rootContainer}>
            <Title children={'People around you'} />
            {friends.map((friend, index) => {
                return <FriendItem
                    key={index}
                    name={friend.name}
                    hobbies={friend.hobbies}
                    age={friend.age}
                    gender={friend.gender}
                    health={friend.health}
                    iq={friend.iq}
                    happiness={friend.happiness}
                />
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 10,
    },
});

export default FriendListScreen;