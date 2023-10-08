import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const Page2c = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#23235B",
        alignItems: "center",
        justifyContent: "space-around",
        position: "relative",
      }}
    >
      <View>
        <View
          style={{
            width: 300,
            height: 54,
            padding: 10,
            margin: 10,
            position: "relative",
          }}
        >
          <Text style={{ fontSize: 37, color: "#fff" }}>
            PASSWORD 
            GENERATOR
          </Text>
        </View>
        <View>
          <TextInput
            style={{
              backgroundColor: "#000",
              display: "flex",
              flexDirection: "row",
              width: 300,
              height: 54,
              padding: 10,
              margin: 10,
              textAlign: "center",
            }}
          ></TextInput>
        </View>
      </View>
    </View>
  );
};

export default Page2c;
