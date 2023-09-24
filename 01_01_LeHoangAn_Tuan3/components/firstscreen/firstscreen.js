import React from "react";
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "rgba(199, 244, 246, 1)",
          "rgba(209, 244, 246, 1)",
          "rgba(229, 244, 245, 1)",
          "rgba(0, 204, 249, 1)",
        ]}
        style={styles.background}
      />
      <Image
        source={require("../../assets/Ellipse 8.png")}
        style={{ width: 140, height: 140 }}
      />
      <Text style={styles.title}> Grow Your Bussiness </Text>
      <Text style={styles.title_2}>
        {" "}
        We will help you to grow your bussiness using online server{" "}
      </Text>
      <View style={styles.btn}>
        <TouchableOpacity style={styles.btn_1}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_1}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title_3}>HOW WE WORK?</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange',
    alignItems: "center",
    justifyContent: "space-around",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 640,
  },
  btn: {
    flex: 0,
    height: 48,
    width: 360,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    width: 172,
    textAlign: "center",
    fontSize: 25,
    height: 60,
    fontWeight: "720",
    lineHeight: 29.4,
  },
  title_2: {
    fontWeight: "700",
    lineHeight: 17.58,
    width: 305,
    height: 36,
    textAlign: "center",
    fontSize: 15,
  },
  title_3: {
    textAlign: "center",
    fontWeight: "720",
    fontSize: 18,
  },
  btn_1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(227, 192, 0, 1)",
    display: "flex",
    width: 119,
    height: 48,
  },
});

export default HomeScreen;
