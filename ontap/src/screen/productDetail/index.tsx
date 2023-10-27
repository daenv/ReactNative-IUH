import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";

type donutType = {
  id: number;
  title: string;
  img: number;
  subTitle: string;
  type: string;
  price: string;
  description: string;
};

interface Props {
  navigator: any;
  route: {
    params: {
      donut: donutType;
    };
  };
}

const ProductDetail = ({ navigator, route }: Props) => {
  const [item, setItem] = useState(
    route.params.donut || {
      id: 5,
      title: "Tasty Donut",
      img: require("../../../assets/green_donut.png"),
      subTitle: "Spicy tasty donut family",
      type: "floating",
      price: "$10.00",
      description:
        "Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.",
    }
  );

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (quantity < 1) {
      setQuantity(1);
    } else if (quantity > 10) {
      setQuantity(10);
    }
  }, [quantity]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View>
          <Image source={item.img} style={styles.productImage} />
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <View style={styles.productSubtitlePrice}>
            <Text style={styles.productSubtitle}>{item.subTitle}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        </View>
        <View style={styles.deliveryInfo}>
          <View style={styles.deliveryText}>
            <Text style={styles.deliveryLabel}>Delivery in</Text>
            <Text style={styles.deliveryTime}>30 min</Text>
          </View>
          <View style={styles.quantityControl}>
            <Pressable
              style={styles.quantityButton}
              onPress={() => setQuantity(quantity - 1)}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </Pressable>
            <Text style={styles.quantityText}>{quantity}</Text>
            <Pressable
              style={styles.quantityButton}
              onPress={() => setQuantity(quantity + 1)}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </Pressable>
          </View>
        </View>

        <Pressable
          style={styles.addToCartButton}
          onPress={() => {
            // Xử lý khi người dùng thêm vào giỏ hàng
          }}
        >
          <Text style={styles.addToCartButtonText}>Add to cart</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  productInfo: {
    margin: 10,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  productSubtitlePrice: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  productSubtitle: {
    fontSize: 16,
    color: "#6B6B6B",
  },
  productPrice: {
    fontSize: 16,
    color: "#6B6B6B",
    fontWeight: "bold",
    marginHorizontal: 70,
  },
  deliveryInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  deliveryText: {
    flexDirection: "column",
  },
  deliveryLabel: {
    fontSize: 16,
    color: "#6B6B6B",
  },
  deliveryTime: {
    fontSize: 16,
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 40,
    height: 40,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  addToCartButton: {
    backgroundColor: "#FFC700",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  addToCartButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
});

export default ProductDetail;
