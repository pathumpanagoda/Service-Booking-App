import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const MessageScreen = () => {

  const messagesData = [
    {
      id: '1',
      title: 'Orders',
      description: 'Order status, tracking updates, dispute progress and more...',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg', // Replace with actual profile image URL
      badge: 14,
      timestamp: '',
    },
    {
      id: '2',
      title: 'Promotions',
      description: 'Discounts, sales announcements, price alerts and more',
      profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      badge: 0,
      timestamp: '',
    },
    {
      id: '3',
      title: 'Coin Notification',
      description: "That's right! [20] unclaimed coins equals 💰LKR 58...",
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      badge: 0,
      timestamp: '01:41',
    },
    {
      id: '4',
      title: 'Merge Boss Notification',
      description: 'Play more and get more savings!',
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
      badge: 0,
      timestamp: 'Yesterday',
    },
    {
      id: '5',
      title: 'Play&Earn',
      description: '💎 Daily lucky draw updates >>',
      profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
      badge: 0,
      timestamp: 'Yesterday',
    },
    {
      id: '6',
      title: 'Kinology Official Store',
      description: 'Trending products you will want to check out',
      profileImage: 'https://randomuser.me/api/portraits/women/6.jpg',
      badge: 6,
      timestamp: '24/11',
    },
    {
      id: '7',
      title: 'ANKER Official Store',
      description: '🔊 Unlock 20% off on Soundcore 3 speakers now',
      profileImage: 'https://randomuser.me/api/portraits/men/7.jpg',
      badge: 3,
      timestamp: '24/11',
    },
  ];
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.headerTitle}>Messages</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="search-outline" size={24} color="black" style={styles.icon} />
          <Ionicons name="settings-outline" size={24} color="black" />
        </View>
      </View>

      {/* Message List */}
      <FlatList
        data={messagesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.messageItem}>
            <View style={styles.messageIcon}>
              <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
              {item.badge > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.badge}</Text>
                </View>
              )}
            </View>
            <View style={styles.messageDetails}>
              <Text style={styles.messageTitle}>{item.title}</Text>
              <Text style={styles.messageDescription}>{item.description}</Text>
            </View>
            <Text style={styles.messageTimestamp}>{item.timestamp}</Text>
          </TouchableOpacity>
        )}
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 16,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },
  messageIcon: {
    position: 'relative',
    marginRight: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FF3D00',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  messageDetails: {
    flex: 1,
  },
  messageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  messageDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  messageTimestamp: {
    fontSize: 12,
    color: '#999',
  },
});