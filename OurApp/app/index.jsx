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
import image001 from "../assets/images/newsuper02.jpg";
export default function Task() {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  

  return (
    <ScrollView>
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 50,
          backgroundColor: "red",
          position: "relative",
          top: top,
          left: left,
        }}
      ></View>
<Image source={image001}>


      <Pressable
        onPress={() => {
          setTop(top + 5);
        }}
      >
        <Text>Top</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          setLeft(left + 5);
        }}
      >
        <Text>Left</Text>
      </Pressable>


      <Pressable
        onPress={() => {
          setLeft(left - 5);
        }}
      >
        <Text>Right</Text>
      </Pressable>


      <Pressable
        onPress={() => {
          setTop(top -5 );
        }}
      >
        <Text>Bottom</Text>
      </Pressable>
      </Image>
    </ScrollView>
  );
}
