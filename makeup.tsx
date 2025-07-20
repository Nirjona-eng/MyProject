import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const makeupProducts = [
  {
    id: '1',
    name: 'Rose Red Lipstick',
    price: '৳499',
    image: 'https://i.imgur.com/RXcaybp.jpg',
  },
  {
    id: '2',
    name: 'Natural Foundation',
    price: '৳899',
    image: 'https://i.imgur.com/HYwzhpK.jpg',
  },
  {
    id: '3',
    name: 'Compact Powder',
    price: '৳649',
    image: 'https://i.imgur.com/w6Rt9mc.jpg',
  },
  {
    id: '4',
    name: 'Black Mascara',
    price: '৳399',
    image: 'https://i.imgur.com/26hAdyy.jpg',
  },
  {
    id: '5',
    name: 'Peach Blush',
    price: '৳299',
    image: 'https://i.imgur.com/fAmfJ8U.jpg',
  },
];

export default function MakeupScreen() {
  const router = useRouter();

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Makeup Products</Text>

      <FlatList
        data={makeupProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      {/* Floating Cart Button */}
      <TouchableOpacity style={styles.cartButton} onPress={() => router.push('/cart')}>
        <Text style={styles.cartButtonText}>🛒 Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF66B3',
    textAlign: 'center',
    marginVertical: 20,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    elevation: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF66B3',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  cartButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#FF66B3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  cartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
