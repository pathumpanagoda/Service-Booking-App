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
      <View style={{ padding: 8 }} >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Service at Home</Text>
      <Text style={styles.price}>Start at ${price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 0,
    marginRight: 16,
    width: Dimensions.get('window').width * 0.5,
    borderColor: '#F0F0F0',
    borderWidth: 2,
   
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,

  
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