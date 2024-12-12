import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export const ServiceProviderDetailScreen = ({ route, navigation }) => {
  const { provider } = route.params; // Get provider details from route

  return (
    <ScrollView style={styles.container}>
      {/* Image Section */}
      <Image source={{ uri: provider.image }} style={styles.image} />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.favoriteButton}>
        <Ionicons name="heart-outline" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{provider.service}</Text>
        <View style={styles.topRated}>
          <Text style={styles.topRatedText}>Top rated</Text>
        </View>
        <Text style={styles.description}>
          My professional drain cleaning service ensures your pipes are clear and free from blockages. I use advanced
          techniques to remove debris and buildup, restoring proper flow in your kitchen sinks, bathroom drains, and
          more.
        </Text>

        <View style={styles.infoRow}>
          <MaterialIcons name="location-on" size={20} color="#22AD01" />
          <Text style={styles.infoText}>4517 Washington</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="star" size={20} color="#FFD700" />
          <Text style={styles.infoText}>
            {provider.rating} ({provider.reviews} reviews)
          </Text>
        </View>

        {/* Service Provider Info */}
        <View style={styles.providerInfo}>
          <Image source={{ uri: provider.image }} style={styles.providerImage} />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.providerName}>{provider.name}</Text>
            <Text style={styles.providerLabel}>Service provider</Text>
          </View>
          <View style={styles.providerActions}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="call-outline" size={20} color="#22AD01" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="chatbubble-outline" size={20} color="#22AD01" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Price and Book Now */}
        <View style={styles.footer}>
          <Text style={styles.totalPrice}>Total price</Text>
          <Text style={styles.price}>${provider.price}</Text>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 300,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 16,
    backgroundColor: '#00000080',
    padding: 8,
    borderRadius: 20,
  },
  favoriteButton: {
    position: 'absolute',
    top: 60,
    right: 16,
    backgroundColor: '#00000080',
    padding: 8,
    borderRadius: 20,
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  topRated: {
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  topRatedText: {
    fontSize: 12,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  providerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    backgroundColor: '#F9F9F9',
    padding: 12,
    borderRadius: 8,
  },
  providerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  providerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  providerLabel: {
    fontSize: 12,
    color: '#666',
  },
  providerActions: {
    marginLeft: 'auto',
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 8,
  },
  footer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalPrice: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  bookButton: {
    backgroundColor: '#22AD01',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  bookButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
