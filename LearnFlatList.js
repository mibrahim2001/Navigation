import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import image1 from "./assets/sampleimage1.jpeg";
import image2 from "./assets/sampleimage2.png";
import image3 from "./assets/sampleimage3.jpeg";
import whatsapp from "./assets/whatsapp-logo.png";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function LearnFlatList() {
  const [data, setData] = useState([
    { id: 100, image: image1, name: "Furqan", message: "Yar paisey wapis krde ab?", time: "11:59 AM", unread: 3 },
    { id: 200, image: image3, name: "Umer", message: "Hello! How are you?", time: "11:02 AM", unread: 1 },
    { id: 300, image: image2, name: "Ibby", message: "I am great!", time: "10:02 AM", unread: 10 },
  ]);

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.15,
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#f4f8f9",
        }}
      >
        <Image
          style={{
            width: 60,
            height: 60,
          }}
          source={whatsapp}
        />
        <Text style={{ fontSize: 27, fontWeight: "bold", marginLeft: 10 }}> Chats </Text>
      </View>

      <View style={{ flex: 0.7, backgroundColor: "#f4f8f9" }}>
        {console.log(data)}

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: "#f4f8f9",
                height: 80,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderBottomColor: "#b5b7b9",
              }}
            >
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <Image style={{ width: 60, height: 60, borderRadius: 200 / 4, marginLeft: 5 }} source={item.image} />
                <TouchableOpacity style={{ marginLeft: 20 }}>
                  <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>{item.name}</Text>
                  <Text style={{ fontSize: 14, color: "#b5b7b1" }}>{item.message}</Text>
                </TouchableOpacity>
              </TouchableOpacity>

              <View style={{ justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                <Text style={{ fontSize: 11, color: "#96d69c" }}>{item.time}</Text>
                <View
                  style={{
                    backgroundColor: "#05d50b",
                    borderRadius: 100,
                    width: 20,
                    height: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Text style={{ fontSize: 10, color: "white" }}>{item.unread}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          // keyExtractor={item=>item.key}
        />
      </View>

      <View style={{ flex: 0.2, alignItems: "center", justifyContent: "center", backgroundColor: "#f4f8f9" }}>
        <TouchableOpacity
          style={{ width: 150, height: 40, backgroundColor: "green", alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Testing Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
