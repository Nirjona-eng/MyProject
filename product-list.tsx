import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProductListScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Category</Text>

      <TouchableOpacity style={styles.categoryButton} onPress={() => router.push('/makeup')}>
        <Text style={styles.categoryText}>💄 Makeup</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categoryButton} onPress={() => router.push('/haircare')}>
        <Text style={styles.categoryText}>💇‍♀️ Haircare</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categoryButton} onPress={() => router.push('/skincare')}>
        <Text style={styles.categoryText}>🧴 Skincare</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={() => router.replace('/')}>
        <Text style={styles.logoutButtonText}>🚪 Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF66B3',
    marginBottom: 40,
  },
  categoryButton: {
    backgroundColor: '#FF66B3',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 16,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  categoryText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 30,
  },
  logoutButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
