import { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
// import ViewPager from "react-native-pager-view";
import image1 from "../assets/images/bike2.jpg";
import image from "../assets/images/photo.jpeg";
import image2 from "../assets/images/superbike01.jpg";
export default function Task() {
  const [color, setColor] = useState(false);
  const [RightMove, setRightMove] = useState(false);

  function handleColor() {
    setColor(!color);
  }

  function bikeMove() {
    setRightMove(!RightMove);
  }
  return (
    <ScrollView>
      <ImageBackground source={image} resizeMode="cover">
        <ImageBackground source={image1} resizeMode="cover">
          <Pressable onPress={() => handleColor()}>
            <Text
              style={{
                fontSize: 50,
                color: "yellow",
              }}
            >
              hello
            </Text>
          </Pressable>

          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              color: "red",
            }}
          >
            GoodMorning
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 78,
              fontWeight: "condensed",
              color: "skyblue",
            }}
          >
            आहिस्ता चल ज़िन्दगी, अभी कई क़र्ज़ चुकाना बाकी है, कुछ दर्द मिटाना बाकी
            है, कुछ फ़र्ज़ निभाना बाकी है!!. hiii
          </Text>
        </ImageBackground>
      </ImageBackground>
      <View
        style={{
          height: 500,
          top: 16,
          position: "relative",
          marginLeft: 19,
        }}
      >
        <Text>NewPage01</Text>
        <Pressable onPress={() => bikeMove()}>
          <Text
            style={{
              fontSize: 30,
              color: "green",
            }}
          />
          NewPage02
          <Image source={image2} style={{ height: 700, width: 500 }} />
        </Pressable>
      </View>
    </ScrollView>
  );
}
