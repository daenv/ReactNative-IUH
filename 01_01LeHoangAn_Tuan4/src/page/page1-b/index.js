import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Page1b({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "rgba(199, 244, 246, 1)",
          "rgba(209, 244, 246, 1)",
          "rgba(229, 244, 245, 1)",
          "rgba(0, 204, 249, 1)",
        ]}
        style={styles.background}
      />
      <Image
        source={require("../../../assets/lock.png")}
        style={{ width: 105, height: 117 }}
      />
      <Text style={styles.title}>Forget Password</Text>
      <Text style={styles.title_2}>
        Provide your account’s email for which you want to reset your password
      </Text>
      <View style={styles.RInput}>
        <Image
          source={require("../../../assets/mail.png")}
          style={{ width: 48, height: 45 }}
        />
        <TextInput style={styles.input} placeholder="Email" />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>NEXT</Text>
      </TouchableOpacity>
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
    display: "flex",
    flexDirection: "row",
  },
  input: {
    backgroundColor: "rgba(196, 196, 196, 1)",
    width: 259,
    height: 47,
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 310,
    height: 49,
    backgroundColor: "rgba(227, 192, 0, 1)",
  },
  title: {
    width: 172,
    textAlign: "center",
    fontSize: 27,
    fontWeight: "720",
    height: 60,
    lineHeight: 29.5,
  },
  title_2: {
    width: 302,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "720",
    height: 37,
    lineHeight: 17.58,
  },
});

export default Page1b;
