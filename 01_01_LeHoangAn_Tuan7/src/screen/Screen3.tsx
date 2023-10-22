import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
type BikeItem = {
  id: number;
  name: string;
  img: any;
  type: string;
  price: number;
  decription: string;
};

interface Screen3Props {
  navigation: any;
  route: {
    params: {
      item: BikeItem;
    };
  };
}

const Screen3 = ({ navigation, route }: Screen3Props) => {
  const [item, setItem] = useState(
    route.params?.item || {
      id: 9,
      name: "Pina Cycle",
      img: require("../../assets/bike12.png"),
      type: "Mountain",
      price: 5800,
    }
  );
  return (
    <View style={{ flex: 1, marginTop: 60 }}>
      <View style={styles.imageComponenet}>
        <Image source={item.img} style={styles.imageBike}></Image>
      </View>
      <Text style={styles.nameBike}>{item.name}</Text>
      <View style={styles.saleComponent}>
        <Text style={styles.salePrice}>15% OFF | 350$</Text>
        <Text style={styles.priceOri}>{item.price}</Text>
      </View>
      <Text style={styles.txtDescrip}>Description</Text>
      <Text style={styles.areaDescrip}>{item.decription}</Text>
      <View style={styles.addComponent}>
        <Image
          source={require("../../assets/heart.png")}
          style={styles.heartIcon}
        ></Image>
        <Pressable style={styles.addPress}>
          <Text>Add to card</Text>
        </Pressable>
      </View>
      <Pressable
        style={{
          width: 200,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#E94141",
          borderRadius: 30,
          marginLeft: 100,
          marginTop: 20,
          

        }}
        onPress={() => {
          navigation.navigate("Screen2");
        }}
      >
        <Text>Back to screen 2</Text>
      </Pressable>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  imageComponenet: {
    width: 360,
    height: 350,
    backgroundColor: "#E941411A",
    marginTop: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
  imageBike: {
    width: 300,
    height: 340,
    resizeMode: "contain",
  },
  nameBike: {
    fontSize: 30,
    fontWeight: "500",
    marginLeft: 15,
    marginTop: 15,
  },
  saleComponent: {
    flexDirection: "row",
  },
  salePrice: {
    fontSize: 25,
    fontWeight: "400",
    color: "#00000096",
    marginLeft: 15,
  },
  priceOri: {
    fontSize: 25,
    fontWeight: "400",
    marginLeft: 40,
    textDecorationLine: "line-through",
  },
  txtDescrip: {
    fontSize: 25,
    fontWeight: "400",
    marginLeft: 15,
    marginTop: 15,
  },
  areaDescrip: {
    fontSize: 20,
    fontWeight: "400",
    color: "#00000091",
    marginLeft: 15,
    marginTop: 15,
  },
  addComponent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  heartIcon: {
    width: 35,
    height: 35,
    marginLeft: 20,
  },
  addPress: {
    width: 270,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E94141",
    borderRadius: 30,
    marginLeft: 40,
    fontSize: 25,
    fontWeight: "400",
    color: "#FFFAFA",
  },
});
