import { View, StyleSheet } from "react-native";
import Title from "../../components/ui/Title";
import { friends } from "../../data/friends/dummy-friends";
import FriendItem from "../../components/ui/FriendItem";

function FriendListScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>People around you</Title>
      {friends.map((friend, index) => {
        return (
          <FriendItem
            key={index}
            name={friend.name}
            hobbies={friend.hobbies}
            age={friend.age}
            gender={friend.gender}
            health={friend.health}
            iq={friend.iq}
            happiness={friend.happiness}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    width: "100%",
  },
});

export default FriendListScreen;