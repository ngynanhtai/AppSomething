import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductListItem(props: any) {
    const { product } = props;
  return (
    <View style={styles.shadow}>
         <View style={styles.container}>
      <Image style={styles.image} source={product.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{product.name}</Text>
        <View style={styles.priceRow}>
            <Text style={styles.price}>{product.price}</Text>
            <TouchableOpacity >
                <Text style={styles.cartText}>MUA +</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: '#FFF',
       marginBottom: 20,
       borderRadius: 4,
       overflow: 'hidden'
    },
    shadow: {
        shadowOpacity: 0.1,
        shadowColor: '#000',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0}
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
    image: {
        height: 150,
        width: '100%',
        resizeMode: 'contain'
    },
    info: {
        padding: 8
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        flex: 1
    },
    cartText: {
        textTransform: 'uppercase',
        color: '#2f95dc',
        fontSize: 16
    }
});