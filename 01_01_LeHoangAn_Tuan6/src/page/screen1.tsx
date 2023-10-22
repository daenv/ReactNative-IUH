import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import Product from "../model/product";
import { useNavigation } from "@react-navigation/native";

interface ProductProps {
  route: {
    params: {
      product: Product;
    };
  };
}

const Screen1: React.FC<ProductProps> = ({ route }) => {
  const { product } = route.params || {};
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>{product?.title} hehe</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 16,
    marginRight: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  colorPicker: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  colorPickerText: {
    fontSize: 16,
    marginRight: 10,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  colorOptionCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
});
export default Screen1;
