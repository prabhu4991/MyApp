import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Dimensions, Text, View,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function _Layout() {
  return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "red",
        //   title: "RockStar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" color={color} size={size} />
          ),
          tabBarStyle: {
            paddingBottom: 5,
            height: 55,
            with: Dimensions.get("screen").width - 20,
            borderRadius: 10,
            // position: "absolute",
            // bottom: 55,
          },
        }}
      />
  );
}
