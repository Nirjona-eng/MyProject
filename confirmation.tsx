import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ConfirmationScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.success}>✅ Order Confirmed!</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.replace('/product-list')}>
        <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.buttonText}>Log Out</Text>
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
  success: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FF66B3',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginVertical: 10,
  },
  logoutButton: {
    backgroundColor: '#666',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
