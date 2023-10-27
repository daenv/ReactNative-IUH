import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";

interface Screen2Props {
  navigation: any;
}

const Screen2 = ({ navigation }: Screen2Props) => {
  const bike = [
    {
      id: 1,
      name: "Pinarello",
      img: require("../../assets/bike.png"),
      type: "RoadBike",
      price: 1800,
      decription:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },

    {
      id: 2,
      name: "Pina Mountai",
      img: require("../../assets/bike.png"),
      type: "RoadBike",
      price: 2800,
      decription:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
    {
      id: 3,
      name: "Pina bike",
      img: require("../../assets/bine.png"),
      type: "Mountain",
      price: 3800,
      decription:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },

    {
      id: 4,
      name: "Pina Cycle",
      img: require("../../assets/bike1.png"),
      price: 4800,
      decription:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
    {
      id: 5,
      name: "Pina Cycle",
      img: require("../../assets/bike.png"),
      type: "Mountain",
      price: 5800,
      decription:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
    {
      id: 6,
      name: "Pina Mountai",
      img: require("../../assets/bike.png"),
      type: "RoadBike",
      price: 2800,
      decription:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
    {
      id: 7,
      name: "Pina bike",
      img: require("../../assets/bike.png"),
      type: "Mountain",
      price: 3800,
      decription:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },

    {
      id: 8,
      name: "Pina Cycle",
      img: require("../../assets/bike1.png"),
      price: 4800,
      decription:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
    {
      id: 9,
      name: "Pina Cycle",
      img: require("../../assets/bike12.png"),
      type: "Mountain",
      price: 5800,
      decription:
        "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.",
    },
  ];

  const [selection, setSelection] = useState<number>(0);
  const [state, setState] = useState<
    Array<{ id: number; name: string; img: any; price: number }>
  >([]);

  const handleAllPress = () => {
    setSelection(1);
    setState(bike);
  };
  const handleFilterRoadBike = () => {
    setSelection(2);
    setState(bike.filter((item) => item.type === "RoadBike"));
  };
  const handleFilterRoadMountain = () => {
    setSelection(3);
    setState(bike.filter((item) => item.type === "Mountain"));
  };

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "700",
          color: "#E94141",
          marginTop: 80,
          marginLeft: 30,
        }}
      >
        The world’s Best Bike
      </Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Pressable
          style={[
            styles.press,
            selection === 1 ? { backgroundColor: "#E94141" } : null,
          ]}
          onPress={handleAllPress}
        >
          <Text>All</Text>
        </Pressable>

        <Pressable
          style={[
            styles.press,
            selection === 2 ? { backgroundColor: "#E94141" } : null,
          ]}
          onPress={handleFilterRoadBike}
        >
          <Text>RoadBike</Text>
        </Pressable>
        <Pressable
          style={[
            styles.press,
            selection === 3 ? { backgroundColor: "#E94141" } : null,
          ]}
          onPress={handleFilterRoadMountain}
        >
          <Text>Mountain</Text>
        </Pressable>
      </View>

      <FlatList
        numColumns={2}
        data={state}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={styles.listItemStyle}
              onPress={() => {
                navigation.navigate({ name: "Screen3", params: { item } });
              }}
            >
              <Image
                source={require("../../assets/heart.png")}
                style={styles.icon}
              ></Image>
              <Image source={item.img} style={styles.imageItem}></Image>
              <Text style={{ fontSize: 20, fontWeight: "400" }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "400" }}>
                {item.price}
              </Text>
            </Pressable>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  press: {
    width: 100,
    height: 30,
    borderRadius: 5,
    borderColor: "#E9414187",
    borderWidth: 1,
    marginLeft: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  listItemStyle: {
    width: 170,
    height: 200,
    backgroundColor: "#F7BA8326",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  icon: {
    width: 18,
    height: 15,
    position: "absolute",
    top: 10,
    left: 10,
  },
  imageItem: {
    width: 135,
    height: 127,
    justifyContent: "center",
    alignItems: "center",
  },
});
