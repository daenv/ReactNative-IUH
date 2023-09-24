import React from "react";
import { View, Text, Button } from "react-native";

function Page1c({ navigation }) {
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
      <Text style={styles.head_1}>CODE</Text>
      <Text style={styles.title}>VERIFICATION</Text>
      <Text style={styles.title_2}>
        Enter ontime password sent on ++849092605798
      </Text>
      <View style={styles.RInput}>
        <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
        <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
        <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
        <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
        <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
        <TextInput style={styles.input} keyboardType="numeric" maxLength={1} />
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
    top: 0,
    left: 0,
    height: 650,
    right: 0,
  },
  head_1: {
    textAlign: "center",
    fontSize: 62,
    fontWeight: "720",
    lineHeight: 70.4,
    height: 73,
  },
  title: {
    width: 169,
    height: 58,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 29.3,
  },
  title_2: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "720",
    lineHeight: 17.6,
    width: 302,
    height: 36,
  },

  RInput: {
    display: "flex",
    flexDirection: "row",
    height: 55,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "720",
    width: 50,
    height: 50,
  },
  btn: {
    display: "flex",
    backgroundColor: "rgba(227, 192, 0, 1)",
    alignItems: "center",
    justifyContent: "center",
    width: 340,
    height: 50,
  },
});

export default Page1c;
