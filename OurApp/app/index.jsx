import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text
} from "react-native";
import image from "../assets/images/photo.jpeg";
import image1 from "../assets/images/bike2.jpg";
import { useState } from "react";

export default function Task() {
  const [color, setColor] = useState(false);

  function handleColor() {
    setColor(!color);
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

      {color &&{(
        <ImageBackground source={image} resizeMode="cover"> 
         <Pressable onPress={()=> handleColor()}>
          <Text>hello</Text>
        </Pressable>
     ) }}
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

    </ScrollView>
    
  );
}
