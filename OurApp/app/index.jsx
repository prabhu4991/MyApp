const { View, Text, Image } = require("react-native");
import image1 from "@/assets/images/photo.jpeg";

function App(){
    return(
<View>
  <Text>
    Learning github
  </Text>
  <Image source={image1}
  style = {{height:500, width:500}}
  />
</View>
    );
}
export default App;