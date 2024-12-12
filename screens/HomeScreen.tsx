import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ServiceIcon } from "../components/ServiceIcon";
import { ServiceCard } from "../components/ServiceCard";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Img1 from "../assets/banner.png";
import ProviderDetails from './ProviderDetailsScreen';
import { useNavigation } from "@react-navigation/native";



const serviceProviders = [
  {
    id: "1",
    name: "Oliver Smith",
    service: "Professional AC and maintenance service",
    rating: 4.9,
    reviews: 10,
    price: 120,
    image: "https://picsum.photos/200/300?random=1",
  },
  {
    id: "2",
    name: "Emily Johnson",
    service: "Detailed home cleaning service",
    rating: 4.9,
    reviews: 10,
    price: 120,
    image: "https://picsum.photos/200/300?random=2",
  },
  {
    id: "3",
    name: "Maria Garcia",
    service: "Comprehensive plumbing services",
    rating: 4.7,
    reviews: 180,
    price: 120,
    image: "https://picsum.photos/200/300?random=3",
  },
  {
    id: "4",
    name: "David Nguyen",
    service: "Expert electrical repairs services",
    rating: 4.6,
    reviews: 150,
    price: 120,
    image: "https://picsum.photos/200/300?random=4",
  },
  {
    id: "5",
    name: "Sophia Brown",
    service: "Affordable gardening services",
    rating: 4.8,
    reviews: 90,
    price: 100,
    image: "https://picsum.photos/200/300?random=5",
  },
];

export const HomeScreen = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          <MaterialIcons name="location-on" size={24} color="#22AD01" />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.location}>New York City</Text>
            <Text style={styles.locationLabel}>
              4517 Washington Ave Manchester
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={25} color="#666" />
        <TextInput
          placeholder="Search for service"
          style={styles.searchInput}
          placeholderTextColor="#666"
        />
      </View>

      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image source={Img1} style={styles.banner} />
      </View>

      {/* Services */}
      {/* Services */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Services</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.servicesScroll}
        >
          {[
            { icon: "snow-outline", label: "AC Services" },
            { icon: "brush-outline", label: "Cleaning" },
            { icon: "color-palette-outline", label: "Painters" },
            { icon: "flash-outline", label: "Electrician" },
            { icon: "hammer-outline", label: "Carpentry" }, // Add more services as needed
          ].map((service, index) => (
            <View key={index} style={styles.serviceIconContainer}>
              <View style={styles.serviceIconCircle}>
                <Ionicons
                  name={service.icon as keyof typeof Ionicons.glyphMap}
                  size={24}
                  color="black"
                />
              </View>
              <Text style={styles.serviceIconLabel}>{service.label}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Best Service Providers */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Service Providers</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.serviceProvidersRow}>
            {serviceProviders.slice(0, 3).map((provider) => (
              <TouchableOpacity
                key={provider.id}
                style={styles.providerCard}
                onPress={() =>navigation.navigate("ProviderDetails", { provider })}
              >
                <Image
                  source={{ uri: provider.image }}
                  style={styles.providerImage}
                />
                <View style={styles.providerContent}>
                  <Text style={styles.providerService}>{provider.service}</Text>
                  <Text style={styles.providerName}>{provider.name}</Text>
                  <View style={styles.ratingContainer}>
                    <View style={styles.ratingLeft}>
                      <Ionicons name="star" size={16} color="#FFD700" />
                      <Text style={styles.rating}>
                        {provider.rating} ({provider.reviews})
                      </Text>
                    </View>
                    <Text style={styles.providerPrice}>${provider.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Best Service Providers */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Service Providers</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.serviceProvidersRow}>
            {serviceProviders.slice(2, 5).map((provider) => (
              <TouchableOpacity key={provider.id} style={styles.providerCard}>
                <Image
                  source={{ uri: provider.image }}
                  style={styles.providerImage}
                />
                <View style={styles.providerContent}>
                  <Text style={styles.providerName}>{provider.name}</Text>
                  <Text style={styles.providerService}>{provider.service}</Text>
                  <View style={styles.ratingContainer}>
                    <View style={styles.ratingLeft}>
                      <Ionicons name="star" size={16} color="#FFD700" />
                      <Text style={styles.rating}>
                        {provider.rating} ({provider.reviews})
                      </Text>
                    </View>
                    <Text style={styles.providerPrice}>${provider.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: 55,
    backgroundColor: "#fff",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  locationLabel: {
    fontSize: 14,
    color: "#666",
  },
  location: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 16,
    marginTop: 0,
    marginBottom: 10,
    paddingLeft: 10,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#ddd",
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
    width: "100%",
    height: 180,
    borderRadius: 12,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAll: {
    color: "#22AD01",
    fontWeight: "bold",
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 8,
  },
  servicesRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  servicesScroll: {
    paddingHorizontal: 16,
  },

  serviceIconContainer: {
    alignItems: "center",
    marginRight: 25,
  },

  serviceIconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f3f3f3", // Green circle background
    justifyContent: "center",
    alignItems: "center",
  },

  serviceIconLabel: {
    marginTop: 8,
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
    textAlign: "center",
  },

  // mostPopularCard
  serviceProvidersRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  providerCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderColor: "#F0F0F0",
    borderWidth: 2,
    elevation: 0, // Shadow for Android
    marginRight: 16,
    width: Dimensions.get("window").width * 0.5,
  },
  providerImage: {
    width: "100%",
    height: 140,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  providerContent: {
    padding: 8,
  },
  providerName: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  providerService: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Align items to ends
    alignItems: "center",
    marginBottom: 4,
  },
  ratingLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 12,
    color: "#333",
    marginLeft: 4,
  },
  providerPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
});
