import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const serviceProviders = [
  {
    id: '1',
    name: 'Oliver Smith',
    service: 'Professional AC and maintenance service',
    rating: 4.9,
    reviews: 10,
    price: 120,
    image: 'https://picsum.photos/200/300?random=1',
  },
  {
    id: '2',
    name: 'Emily Johnson',
    service: 'Detailed home cleaning service',
    rating: 4.9,
    reviews: 10,
    price: 120,
    image: 'https://picsum.photos/200/300?random=2',
  },
  {
    id: '3',
    name: 'Maria Garcia',
    service: 'Comprehensive plumbing services',
    rating: 4.7,
    reviews: 180,
    price: 120,
    image: 'https://picsum.photos/200/300?random=3',
  },
  {
    id: '4',
    name: 'David Nguyen',
    service: 'Expert electrical repairs services',
    rating: 4.6,
    reviews: 150,
    price: 120,
    image: 'https://picsum.photos/200/300?random=4',
  },
  {
    id: '5',
    name: 'Sophia Brown',
    service: 'Affordable gardening services',
    rating: 4.8,
    reviews: 90,
    price: 100,
    image: 'https://picsum.photos/200/300?random=5',
  },
];


export const SearchScreen = () => {
  const renderServiceCard = ({ item }: { item: typeof serviceProviders[0] }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.service}>{item.service}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>
            {item.rating} ({item.reviews})
          </Text>
        </View>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Best services providers</Text>
        <TouchableOpacity>
          <Ionicons name="filter-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Services Grid */}
      <FlatList
        data={serviceProviders}
        renderItem={renderServiceCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: '48%',
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    padding: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  service: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rating: {
    fontSize: 12,
    color: '#333',
    marginLeft: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});