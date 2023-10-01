import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
function Page2a({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(251, 203, 0, 1)", "rgba(191, 154, 0, 1)"]}
        style={styles.background}
      />
      <View style={{ width: 330 }}>
        <Text style={{ fontSize: 30, fontWeight: "700" }}>LOGIN</Text>
      </View>
      <View style={styles.container_Input}>
        <View style={styles.RInput}>
          <Image
            source={require("../../../assets/user.png")}
            style={{ width: 30, height: 30 }}
          />
          <TextInput style={styles.input} placeholder="Name" />
        </View>

        <View style={styles.RInput}>
          <Image
            source={require("../../../assets/lock.png")}
            style={{ width: 30, height: 30 }}
          />
          <TextInput style={styles.input} placeholder="Password" />
          <Image
            source={require("../../../assets/eye.png")}
            style={{ width: 30, height: 30 }}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ fontSize: 20, fontWeight: "720", color: "#fff" }}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: "720" }}>CREATE ACCOUNT</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 640,
  },
  RInput: {
    width: 330,
    height: 54,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
  },
  input: {
    width: 220,
    height: 32,
    marginLeft: 10,
    fontSize: 18,
  },
  container_Input: {
    height: 150,
    display: "flex",
    justifyContent: "space-around",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 330,
    height: 45,
    backgroundColor: "rgba(6, 0, 0, 1)",
  },
});

export default Page2a;
