import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React from "react";

const productList = () => {
  const donut = [
    {
      title: "Tasty Donut",
      img: require("../../../assets/tasty_donut.png"),
      type: "pink",
      price: "$10.00",
      description:
        "Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.",
    },
    {
      title: "Tasty Donut",
      img: require("../../../assets/donut_red.png"),
      type: "tasty",
      price: "$10.00",
      description:
        "Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.",
    },
    {
      title: "Tasty Donut",
      img: require("../../../assets/donut_yellow.png"),
      type: "tasty",
      price: "$20.00",
      description:
        "Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.",
    },
    {
      title: "Tasty Donut",
      img: require("../../../assets/tasty_donut.png"),
      type: "pink",
      price: "$30.00",
      description:
        "Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.",
    },
    {
      title: "Tasty Donut",
      img: require("../../../assets/green_donut.png"),
      type: "floating",
      price: "$10.00",
      description:
        "Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.",
    },
    {
      title: "Floating Donut",
      img: require("../../../assets/green_donut.png"),
      type: "floating",
      price: "$10.00",
      description:
        "Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.",
    },
  ];
  const [state, setState] = React.useState<
    Array<{
      title: string;
      img: any;
      price: number;
      type: string;
      description: string;
    }>
  >([]);

  return (
    <FlatList
      numColumns={1}
      data={state}
      renderItem={({ item }) => {
        return (
          <Pressable>
            <Image source={item.img} />
            <View>
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
            </View>
          </Pressable>
        );
      }}
    ></FlatList>
  );
};

export default productList;

const styles = StyleSheet.create({});
