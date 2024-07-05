// import { Link } from "expo-router";
import { Link } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

export default function App() {
  const markers = [
    {
      id: 1,
      title: "Sukhdev Vihar",
      description: "This is Point A",
      coordinate: {
        latitude: 28.557180435677136,
        longitude: 77.27637514029855,
      },
    },
    {
      id: 2,
      title: "Jamia Millia Islamia",
      description: "This is Point B",
      coordinate: { latitude: 28.56384573530767, longitude: 77.28899141180678 },
    },
    {
      id: 3,
      title: "Masihgarh",
      description: "This is Point C",
      coordinate: { latitude: 28.55876901581252, longitude: 77.27483202162725 },
    },
    {
      id: 4,
      title: "Pocket A",
      description: "This is Point D",
      coordinate: {
        latitude: 28.555614264513288,
        longitude: 77.27794470801767,
      },
    },

    {
id: 5,
title: "New Friends Colony",
description: "This is point E",
coordinate:{
  latitude: 28.568303416468023,
  longitude: 77.26943502846393,
},   
    },
  ];

  return (
    <View style={styles.container}>
     
  
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 28.56384573530767,
          longitude: 77.28899141180678,
          latitudeDelta: 2.90,
          longitudeDelta: 3.89,
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
        <Polyline
          coordinates={markers.map((e) => e.coordinate)}
          strokeColor="black"
          strokeWidth={4}
        />
      </MapView>
        <Link href="/Tabs"><Text>Tabs</Text></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: 500,
  },
});
