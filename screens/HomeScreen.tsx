import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ServiceIcon } from '../components/ServiceIcon';
import { ServiceCard } from '../components/ServiceCard';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Img1 from '../assets/banner.png';

export const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        
        <View>
        <MaterialIcons name="location-on" size={24} color="#003580" />
          <Text style={styles.locationLabel}>Current Location</Text>
          <Text style={styles.location}>New York City</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={25} color="#666" />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor="#666"
        />
      </View>

      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image
          source={Img1}
          style={styles.banner}
        />
      </View>

      {/* Services */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Services</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.servicesGrid}>
          <ServiceIcon icon="snow-outline" label="AC Services" />
          <ServiceIcon icon="brush-outline" label="Cleaning" />
          <ServiceIcon icon="color-palette-outline" label="Painters" />
          <ServiceIcon icon="flash-outline" label="Electrician" />
        </View>
      </View>

      {/* Cleaning & Pest Control */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Cleaning & pest control</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.servicesRow}>
            <ServiceCard
              image="https://picsum.photos/400/300"
              title="Bathroom Cleaning"
              price="49"
            />
            <ServiceCard
              image="https://picsum.photos/400/301"
              title="Car Cleaning"
              price="149"
            />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 55,
  },
  profileImage:{
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  locationLabel: {
    fontSize: 14,
    color: '#666',
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 16,
    marginBottom: 0,
    paddingLeft: 10,
    paddingVertical: 5,  
    borderRadius: 8,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  bannerContainer: {
    margin: 16,
  },
  banner: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
  },
  servicesRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
});