import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const Screen1 = ({ navigation }: any) => {
  return (
    <View style={styles.component}>
      <Text style={styles.title}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.borderImage}>
        <Image
          source={require("../../assets/bike.png")}
          style={styles.image}
        ></Image>
      </View>
      <Text style={styles.name}>POWER BIKE SHOP</Text>
      <Pressable
        style={styles.btnGet}
        onPress={() => {
          navigation.navigate("Screen2");
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Get Started
        </Text>
      </Pressable>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  component: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 100,
    marginLeft: 12,
  },
  borderImage: {
    width: 359,
    height: 388,
    borderRadius: 50,
    backgroundColor: "#E941411A",
    marginTop: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 292,
    height: 270,
    resizeMode: "contain",
  },
  name: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 21,
  },
  btnGet: {
    width: 340,
    height: 61,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 17,
    marginTop: 30,
    backgroundColor: "#E94141",
    borderRadius: 30,
  },
  btnGetText: {
    fontSize: 40,
    fontWeight: "400",
    color: "#FEFEFE",
  },
});
