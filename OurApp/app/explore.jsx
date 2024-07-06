import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function exploreScreen(){
    return(
<View>
    <Text>
        Explore Screen
    </Text>
    <Link href="/Tabs">Rocky Bhai</Link>
</View>
    );
}