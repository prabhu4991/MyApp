import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Dimensions } from "react-native";

export default function _Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "red",
                title: "rocky",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="add-circle" color={color} size={size} />),
                tabBarStyle: {
                    paddingBottom: 5,
                    height: 55,
                    with: Dimensions.get("screen").width - 20,
                    position: "relative",
                    borderRadius: 10,
                },
            }}

        />
    );
}