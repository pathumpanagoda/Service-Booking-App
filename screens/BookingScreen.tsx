import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const BookingScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Active');

  const bookings = [
    {
      id: '#524587',
      title: 'Home Cleaner',
      dateTime: '22 Sep 21, 03:00 - 04:30 PM',
      status: 'Accepted',
      price: '$149',
      ratings: 4.7,
      reviews: 192,
      barber: 'Levi Ray',
      avatar: 'https://picsum.photos/50/50', // Replace with an actual avatar URL
    },
    {
      id: '#524587',
      title: 'Home Cleaner',
      dateTime: '22 Sep 21, 03:00 - 04:30 PM',
      status: 'Submitted',
      price: '$149',
      ratings: 4.7,
      reviews: 192,
      barber: 'Levi Ray',
      avatar: 'https://picsum.photos/50/50',
    },
    {
      id: '#524587',
      title: 'Home Cleaner',
      dateTime: '22 Sep 21, 03:00 - 04:30 PM',
      status: 'Ongoing',
      price: '$149',
      ratings: 4.7,
      reviews: 192,
      barber: 'Levi Ray',
      avatar: 'https://picsum.photos/50/50',
    },
  ];

  const statusColors = {
    Accepted: '#D1F0FF',
    Submitted: '#E8F5E9',
    Ongoing: '#FFF5E5',
  };

  const statusTextColors = {
    Accepted: '#007BFF',
    Submitted: '#28A745',
    Ongoing: '#FF8C00',
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Messages</Text>
      <View style={styles.header}>
      
        {['Active', 'Success', 'Cancelled'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              selectedTab === tab && styles.activeTab,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={bookings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.bookingId}>{item.id}</Text>
              <Text
                style={[
                  styles.status,
                  {
                    backgroundColor: '#fff',
                    color: '#000',
                  },
                ]}
              >
                {item.status}
              </Text>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.dateTime}>{item.dateTime}</Text>
            <View style={styles.footer}>
              <View style={styles.footerLeft}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <View>
                  <Text style={styles.barber}>{item.barber}</Text>
                  <View style={styles.ratings}>
                    <Ionicons name="star" size={14} color="#FFC107" />
                    <Text style={styles.ratingText}>
                      {item.ratings} ({item.reviews} Ratings)
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            {item.status === 'Submitted' && (
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>Cancel Booking</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingTop: 30,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerTitle: {
    marginVertical: 16,
    marginTop: 60,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#003580',
  },
  tabText: {
    fontSize: 16,
    color: '#8E8E93',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookingId: {
    fontSize: 14,
    color: '#666666',
    fontWeight: 'bold',
  },
  status: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    textAlign: 'center',
    overflow: 'hidden',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 6,
    color: '#333333',
  },
  dateTime: {
    fontSize: 14,
    color: '#666666',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  barber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#666666',
    marginLeft: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D5E4A',
  },
  cancelButton: {
    marginTop: 12,
    backgroundColor: '#FFF5F5',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 14,
    color: '#D9534F',
    fontWeight: 'bold',
  },
});