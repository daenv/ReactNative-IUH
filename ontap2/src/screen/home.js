import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { useState } from "react";

const home = ({ navigation }) => {
  const donut = [
    {
      id: 1,
      title: "Tasty Donut",
      img: require("../../../assets/tasty_donut.png"),
      subTitle: "Spicy tasty donut family",
      type: "pink",
      price: "$10.00",
      description:
        "Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.",
    },
    {
      id: 2,
      title: "Tasty Donut",
      img: require("../../../assets/donut_red.png"),
      subTitle: "Spicy tasty donut family",
      type: "tasty",
      price: "$10.00",
      description:
        "Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.",
    },
    {
      id: 3,
      title: "Tasty Donut",
      img: require("../../../assets/donut_yellow.png"),
      subTitle: "Spicy tasty donut family",
      type: "tasty",
      price: "$20.00",
      description:
        "Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.",
    },
    {
      id: 4,
      title: "Tasty Donut",
      img: require("../../../assets/tasty_donut.png"),
      subTitle: "Spicy tasty donut family",
      type: "pink",
      price: "$30.00",
      description:
        "Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.",
    },
    {
      id: 5,
      title: "Tasty Donut",
      img: require("../../../assets/green_donut.png"),
      subTitle: "Spicy tasty donut family",
      type: "floating",
      price: "$10.00",
      description:
        "Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.",
    },
    {
      id: 6,
      title: "Floating Donut",
      img: require("../../../assets/green_donut.png"),
      subTitle: "Spicy tasty donut family",
      type: "floating",
      price: "$10.00",
      description:
        "Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.",
    },
  ];

  const [select, setSelect] = useState(0);
  const [state, setState] = useState([]);
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>WelCome, Jala</Text>
          <Text style={styles.subTitle}>Choice you Best food</Text>
          <TextInput style={styles.search} placeholder="Search food" />
          {/* Category */}
          <View style={styles.categories}>
            <Pressable
              style={[
                styles.itemCategory,
                select === 1 ? { backgroundColor: "##F1B000" } : null,
              ]}
              onPress={() => {
                setSelect(1);
                setState(donut);
              }}
            >
              <Text>Donut</Text>
            </Pressable>
            <Pressable
              style={[
                styles.itemCategory,
                select === 2 ? { backgroundColor: "##F1B000" } : null,
              ]}
              onPress={() => {
                setSelect(2);
                setState(donut.filter((item) => item.type === "pink"));
              }}
            >
              <Text>Pink Donut</Text>
            </Pressable>
            <Pressable
              style={[
                styles.itemCategory,
                select === 3 ? { backgroundColor: "##F1B000" } : null,
              ]}
              onPress={() => {
                setSelect(3);
                setState(donut.filter((item) => item.type === "floating"));
              }}
            >
              <Text>Floating</Text>
            </Pressable>
          </View>

          <FlatList
            data={donut}
            keyExtractor={(item) => item.id.toString()}
            renderItem={itemRender}
          />
        </View>
        {/* </FlatList> */}
      </View>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  header: {
    flex: 1,
    paddingHorizontal: 10,
    width: "100%",
    height: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  search: {
    width: "100%",
    height: 50,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  itemCategory: {
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    paddingHorizontal: 20,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    width: "100%",
    height: 120,
    backgroundColor: "#F4DDDD",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  itemInList: {
    flexDirection: "column",
    gap: 10,
    paddingLeft: 10,
  },
  titleInList: {
    fontSize: 16,
    fontWeight: "700",
  },
  plus: {
    top: 35,
  },
});
