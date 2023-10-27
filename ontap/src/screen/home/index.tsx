import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import ProductDetail from "../productDetail/index";
interface Props {
  navigation: any;
}

interface donutType {
  id: number;
  title: string;
  img: number;
  subTitle: string;
  type: string;
  price: string;
  description: string;
}

const Home = ({ navigation }: Props) => {
  const initialDonutData: donutType[] = [
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

  const [select, setSelect] = useState<number>(0);
  const [filteredData, setFilteredData] =
    useState<donutType[]>(initialDonutData);

  const itemRender = ({ item }: { item: donutType }) => {
    return (
      <Pressable
        style={styles.listItem}
        onPress={() => {
          navigation.navigate({ name: "ProductDetail", params: { item } });
        }}
      >
        <Image source={item.img} style={styles.listItemImage} />
        <View style={styles.itemInList}>
          <Text style={styles.titleInList}>{item.title}</Text>
          <Text>{item.subTitle}</Text>
          <Text style={styles.titleInList}>{item.price}</Text>
        </View>
        <Image
          source={require("../../../assets/plus_button.png")}
          style={styles.plus}
        />
      </Pressable>
    );
  };

  const filterDonuts = (filterType: string | null) => {
    if (filterType) {
      const filteredDonuts = initialDonutData.filter(
        (item) => item.type === filterType
      );
      setFilteredData(filteredDonuts);
    } else {
      setFilteredData(initialDonutData);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome, Jala</Text>
          <Text style={styles.subTitle}>Choose your Best food</Text>
          <TextInput style={styles.search} placeholder="Search food" />

          <View style={styles.categories}>
            <Pressable
              style={[
                styles.itemCategory,
                select === 1 ? { backgroundColor: "#F1B000" } : null,
              ]}
              onPress={() => {
                setSelect(1);
                filterDonuts(null);
              }}
            >
              <Text>Donut</Text>
            </Pressable>
            <Pressable
              style={[
                styles.itemCategory,
                select === 2 ? { backgroundColor: "#F1B000" } : null,
              ]}
              onPress={() => {
                setSelect(2);
                filterDonuts("pink");
              }}
            >
              <Text>Pink Donut</Text>
            </Pressable>
            <Pressable
              style={[
                styles.itemCategory,
                select === 3 ? { backgroundColor: "#F1B000" } : null,
              ]}
              onPress={() => {
                setSelect(3);
                filterDonuts("floating");
              }}
            >
              <Text>Floating</Text>
            </Pressable>
          </View>

          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={itemRender}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    flex: 1,
    paddingHorizontal: 10,
    height: "100%",
    justifyContent: "space-between",
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
  listItemImage: {},
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
