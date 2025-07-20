import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const haircareProducts = [
  {
    id: '1',
    name: 'Argan Oil Shampoo',
    price: '৳599',
    image: 'https://i.imgur.com/EtjLqvO.jpg',
  },
  {
    id: '2',
    name: 'Keratin Conditioner',
    price: '৳699',
    image: 'https://i.imgur.com/VlzE1Tq.jpg',
  },
  {
    id: '3',
    name: 'Hair Serum',
    price: '৳449',
    image: 'https://i.imgur.com/jzIhzDu.jpg',
  },
  {
    id: '4',
    name: 'Anti-Dandruff Oil',
    price: '৳349',
    image: 'https://i.imgur.com/WvOjKjF.jpg',
  },
  {
    id: '5',
    name: 'Hair Mask Treatment',
    price: '৳799',
    image: 'https://i.imgur.com/JrcwZkt.jpg',
  },
];

export default function HaircareScreen() {
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
      <Text style={styles.header}>Haircare Products</Text>

      <FlatList
        data={haircareProducts}
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
