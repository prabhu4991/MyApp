import { Ionicons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

export default function HOMESCREEN(){
    count [count, setUser] =useState(10);
    return(
<View
    style={{
        background="green",
    }}
    >
<Tabs.screen  
option={{
    title:"homepage",
    tabBarIcon: ({ color }) => (
        <Ionicons name="analytics-outline" color={color} />
      ),
      tabBarBadge: count,
}} 


/>   
<Text>Home screen</Text>
<TextInput />
<Link href="/Tabs/explore">Navigate to nested router</Link>
<ScrollView>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
<Text>Home Screen</Text>
</ScrollView>

</View>
    );
}