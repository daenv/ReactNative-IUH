import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function FistScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "rgba(0, 204, 249, 0)",
          "rgba(0, 204, 249, 0.58)",
          "rgba(0, 204, 249, 0.7)",
          "rgba(0, 204, 249, 0.36)",
          "rgba(0, 204, 249, 1)",
        ]}
        style={styles.background}
      />
      <Image
        source={require("../../assets/Ellipse.png")}
        style={{ width: 140, height: 140 }}
      />
      <Text style={styles.title}> Grow Your Bussiness </Text>
      <Text style={styles.title_2}>
        {" "}
        We will help you to grow your bussiness using online server{" "}
      </Text>
      <View style={styles.bnt}>
        <TouchableOpacity style={styles.btn_1}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_1}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>SIGN UP</Text>
        </TouchableOpacity>
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
  btn_1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(227, 192, 0, 1)",
    display: "flex",
    width: 119,
    height: 48,
  },
});
