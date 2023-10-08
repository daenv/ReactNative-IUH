import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  setposi: {
    position: "relative",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    width: 330,
    textAlign: "center",
    position: "relative",
    top: -50,
    right: 20,
  },
  center: {
    width: 330,
    height: 70,
    fontSize: 18,
    fontWeight: 700,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  input: {
    width: 300,
    height: 250,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginTop: 20,
  },
});

const Page2b = () => {
  return (
    <View style={styles.container}>
      <View style={styles.setposi}>
        <View style={styles.top}>
          <Image source={require("../../assets/usb.png")} />
          <Text style={styles.title}>
            {" "}
            USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
            bluetooth
          </Text>
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>Cực kì hài lòng</Text>
          <View style={{ flexDirection: "row" }}>
            <Image source={require("../../assets/Star.png")} />
            <Image source={require("../../assets/Star.png")} />
            <Image source={require("../../assets/Star.png")} />
            <Image source={require("../../assets/Star.png")} />
            <Image source={require("../../assets/Star.png")} />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              borderColor: "#000",
              borderWidth: 1,
              width: 300,
              borderRadius: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={require("../../assets/camera.png")}></Image>
              <View style={{ marginLeft: 0, padding:15 }}>
                <Text style={styles.title}>Thêm Hình Ảnh</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "relative",
          }}
        >
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={4}
            placeholder="Nhập văn bản lớn ở đây..."
          />
          <View style={{ position: "absolute", top: 250, left: 70 }}>
            <Text style={{ fontSize: 13 }}>
              https://meet.google.com/nsj-ojwi-xpp
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#1511EB",
              width: 300,
              height: 40,
              borderWidth: 1,
              borderColor: "#999",
              borderRadius: 5,
              paddingHorizontal: 10,
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View>
              <Text style={{ fontSize: 30, fontWeight: "bold", color: "#fff" }}>
                Gửi
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Page2b;
