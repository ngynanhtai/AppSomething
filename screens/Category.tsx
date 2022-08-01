import { StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react";
import Icon01 from "../assets/icon01.png";
import Icon02 from "../assets/icon02.png";
import Icon03 from "../assets/icon03.png";
import ProductListItem from "../components/ProductListItem";

export default class Category extends React.Component<any, any> {
  static navigationOptions = ({ navigation }: any) => {
    return {
      title: navigation.getParam("categoryName"),
    };
  };
  constructor(props: any) {
    super(props);
    const { navigation } = props;
    this.state = {
      categoryId: navigation.getParam("categoryId"),
      chicken: [
        { id: 1, name: "Chicken Male", image: Icon01, price: 400 },
        { id: 2, name: "Chicken Female", image: Icon01, price: 500 },
        { id: 3, name: "Chicken Combo", image: Icon01, price: 600 },
      ],
      pizza: [
        { id: 1, name: "Chicken Pizza", image: Icon02, price: 400 },
        { id: 2, name: "Seafood Pizza", image: Icon02, price: 500 },
        { id: 3, name: "Sausage Pizza", image: Icon02, price: 600 },
      ],
      steak: [
        { id: 1, name: "Big Steak", image: Icon03, price: 400 },
        { id: 2, name: "Small Steak", image: Icon03, price: 500 },
        { id: 3, name: "Premium Steak", image: Icon03, price: 600 },
      ],
    };
  }
  render() {
    var categoryId: number = this.state.categoryId;
    var products: any = [];
    if (categoryId == 1) {
      const { chicken } = this.state;
      products = chicken;
    } else if (categoryId == 2) {
      const { pizza } = this.state;
      products = pizza;
    } else if (categoryId == 3) {
      const { steak } = this.state;
      products = steak;
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.wrapper}>
              <View style={styles.product}>
                <ProductListItem product={item} />
              </View>
            </View>
          )}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  wrapper: {
    flex: 1 / 2,
  },
  product: {
    padding: 8,
  },
});
