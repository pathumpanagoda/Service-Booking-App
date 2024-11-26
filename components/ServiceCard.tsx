import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

type ServiceCardProps = {
  image: string;
  title: string;
  price: string;
};

export const ServiceCard = ({ image, title, price }: ServiceCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Service at Home</Text>
      <Text style={styles.price}>Start at ${price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginRight: 16,
    width: Dimensions.get('window').width * 0.6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  price: {
    fontSize: 14,
    color: '#22C55E',
    marginTop: 4,
  },
});