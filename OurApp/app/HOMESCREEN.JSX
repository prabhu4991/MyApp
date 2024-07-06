import { Ionicons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [count, setUser] = useState(10);
  return (
    <View
      style={{
        background: "green",
      }}
    >
      <Tabs.Screen
        option={{
          title: "homepage",
          tabBarIcon: ({ color }) => (
            <Ionicons name="analytics-outline" color={color} />
          ),
          tabBarBadge: count,
        }}
      />
      {/* <Text>Home screen</Text> */}
      {/* <TextInput/>
    //   <link href="/Tabs/explore">Tabs</link> */}
    //   {/* <ScrollView> */}
    //     {/* <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
    //     <Text>Home Screen</Text>
        <Text>Home Screen</Text> 
      </ScrollView>
    </View>
  );
}
