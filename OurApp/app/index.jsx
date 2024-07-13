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
import { LinearGradient } from 'expo-linear-gradient';
export default function Task() {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  

  return (
    <ScrollView>
      
      <View
        style={{
          height: 400,
          width: 400,
          borderRadius: 250,
          backgroundColor: "red",
          position: "relative",
          overflow: "hidden",

          top: top,
          left: left,
        }}
        
      >
        <Image source={image001} style={{height:400, width:400}}/>
      </View>
<View style={{top:18}}>
<LinearGradient    
 colors={["red","blue","green","orange","pink","black"]}    
style={{
  height:400,
  width:400,
  
}}
start={{x:0,y:0}}
  end={{x:1,y:1}}
>
  
<Text>
hello
  </Text>  
</LinearGradient>

</View>



      <Pressable
        onPress={() => {
          setTop(top - 5);
        }}
      >
        <Text>Top</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          setLeft(left - 5);
        }}
      >
        <Text>Left</Text>
      </Pressable>


      <Pressable
        onPress={() => {
          setLeft(left + 5);
        }}
      >
        <Text>Right</Text>
      </Pressable>


      <Pressable
        onPress={() => {
          setTop(top +5 );
        }}
      >
        <Text>Bottom</Text>
      </Pressable>
      
    </ScrollView>
  );
}
