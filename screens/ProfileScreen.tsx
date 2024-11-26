import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign, Feather } from '@expo/vector-icons';

export const ProfileScreen = () => {
  const profileOptions = [
    { id: 1, title: 'Register as a Partner', icon: <Ionicons name="briefcase-outline" size={20} color="#666" /> },
    { id: 2, title: 'My Booking', icon: <MaterialIcons name="book-online" size={20} color="#666" /> },
    { id: 3, title: 'Help Center', icon: <AntDesign name="questioncircleo" size={20} color="#666" /> },
    { id: 4, title: 'Share & Earn', icon: <Feather name="share-2" size={20} color="#666" /> },
    { id: 5, title: 'Rate us', icon: <AntDesign name="staro" size={20} color="#666" /> },
    { id: 6, title: "FAQ's", icon: <Feather name="help-circle" size={20} color="#666" /> },
    { id: 7, title: 'Privacy Policy', icon: <Ionicons name="lock-closed-outline" size={20} color="#666" /> },
    { id: 8, title: 'Logout', icon: <AntDesign name="logout" size={20} color="#666" /> },
  ];
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://picsum.photos/200' }} // Replace with a real avatar image
          style={styles.avatar}
        />
        <Text style={styles.name}>Alfredo Ross</Text>
        <Text style={styles.email}>syalfreelance@gmail.com</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Options */}
      <View style={styles.optionsContainer}>
        <FlatList
          data={profileOptions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.option}>
              <View style={styles.optionIcon}>{item.icon}</View>
              <Text style={styles.optionText}>{item.title}</Text>
              <Ionicons name="chevron-forward" size={20} color="#ccc" />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 70,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  editProfileButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  editProfileText: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  optionsContainer: {
    marginTop: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  optionIcon: {
    marginRight: 10,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default ProfileScreen;
