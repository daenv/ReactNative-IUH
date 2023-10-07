import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBCB00",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
  },
  title_position: {
    position: "absolute",
    top: -150,
  },
  input: {
    display: "flex",
    flexDirection: "row",
    width: 330,
    height: 54,
    backgroundColor: "#F2F2F2",
    padding: 10,
    margin: 10,
    textAlign: "center",
  },
  button: {
    width: 330,
    height: 54,
    backgroundColor: "#000",
    padding: 10,
    margin: 10,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
  },
});

const Page2a = () => {
  return (
    <View style={styles.container}>
      <View style={{ position: "relative" }}>
        <View style={styles.title_position}>
          <Text style={styles.title}>LOGIN</Text>
        </View>
        <View>
          <Image
            source={require("../../assets/avatar_user.png")}
            style={{ position: "absolute", zIndex: 1, top: 22, left: 22 }}
          />
          <TextInput placeholder="Username" style={styles.input}></TextInput>
        </View>
        <View>
          <Image
            source={require("../../assets/lock.png")}
            style={{ position: "absolute", zIndex: 1, top: 22, left: 22 }}
          />
          <TextInput placeholder="Password" style={styles.input}></TextInput>
          <Image
            source={require("../../assets/eye.png")}
            style={{ position: "absolute", zIndex: 1, top: 22, right: 22 }}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.button}>LOGIN</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "400",
            color: "#000",
            position: "absolute",
            top: 250,
            right: 35,
          }}
        >
          For got your password?
        </Text>
      </View>
    </View>
  );
};

export default Page2a;
