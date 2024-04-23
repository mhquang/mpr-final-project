import { View, StyleSheet, ScrollView } from 'react-native';
import FriendListScreen from './FriendListScreen';
import ScreenLayout from './ScreenLayout';
function FriendsScreen() {
    return (
        <ScreenLayout>
        <ScrollView>
            <FriendListScreen />
        </ScrollView>
        </ScreenLayout>
    )
}
export default FriendsScreen;
