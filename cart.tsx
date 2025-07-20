import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type Product = {
  id: string;
  name: string;
  price: string;
};

export default function CartScreen() {
  const { cartItems } = useLocalSearchParams();

  let items: Product[] = [];

  try {
    items = cartItems ? JSON.parse(cartItems as string) : [];
  } catch (e) {
    console.warn('Failed to parse cartItems:', e);
    items = [];
  }

  if (!items || items.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Cart</Text>
        <Text style={styles.message}>Your cart is empty.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  message: { fontSize: 16, color: 'gray' },
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  name: { fontSize: 18 },
  price: { fontSize: 16, color: 'gray' },
});
