import React from "react";
import { View, Text, Button } from "react-native";

function Page1d({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.head_1}>LOGIN</Text>
      <View style={styles.RInput}>
        <TextInput style={styles.input} placeholder="Email" />
      </View>
      <View style={styles.RInput}>
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity>
          <Image
            source={require("../../assets/eye.png")}
            style={{ width: 36, height: 36 }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn_Login}>
        <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 14, fontWeight: "400" }}>
        When you agree to terms and conditions
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "400",
          color: "rgba(93, 37, 250, 1)",
        }}
      >
        For got your password?
      </Text>
      <Text style={{ fontSize: 14, fontWeight: "400" }}>Or login with</Text>
      <View style={styles.row_BTN}>
        <TouchableOpacity
          style={[styles.btn_Login_oth, { backgroundColor: "rgb(39,90,141)" }]}
        >
          <Image
            source={require("../../assets/fb.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn_Login_oth,
            { backgroundColor: "rgba(6, 128, 241, 1)" },
          ]}
        >
          <Text style={{ fontSize: 35, fontWeight: "700", color: "#fff" }}>
            Z
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_Login_oth}>
          <Image
            source={require("../../assets/google.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  head_1: {
    fontSize: 25,
    fontWeight: "700",
  },
  RInput: {
    display: "flex",
    flexDirection: "row",
    width: 330,
    height: 54,
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    padding: 10,
  },
  input: {
    width: 290,
  },
  btn_Login: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(229, 57, 53, 1)",
    width: 330,
    height: 48,
  },
  row_BTN: {
    display: "flex",
    flexDirection: "row",
    width: 330,
    height: 48,
  },
  btn_Login_oth: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(6, 128, 241, 1)",
    width: 110,
    height: 48,
  },
});

export default Page1d;
