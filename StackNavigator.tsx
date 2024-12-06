import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { SearchScreen } from "./screens/SearchScreen";
import { BookingScreen } from "./screens/BookingScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { MessageScreen } from "./screens/MessageScreen";
import { ServiceProviderDetailScreen } from "./screens/ProviderDetailsScreen";

import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { NavigationContainer } from "@react-navigation/native";

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottumTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { height: 55, paddingTop: 2 }, // Increase the height here
          tabBarActiveTintColor: "#22AD01", // Set active label color to green
          tabBarLabelStyle: { fontSize: 12, fontWeight: "normal" }, // Set font size and weight
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#22AD01" />
              ) : (
                <AntDesign name="home" size={24} color="#575757" />
              ),
          }}
        />

        <Tab.Screen
          name="Booking"
          component={BookingScreen}
          options={{
            tabBarLabel: "Booking",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="calendar-clear" size={24} color="#22AD01" />
              ) : (
                <AntDesign name="calendar" size={24} color="#575757" />
              ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: "Search",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome6
                  name="magnifying-glass-chart"
                  size={24}
                  color="#22AD01"
                />
              ) : (
                <AntDesign name="search1" size={24} color="#575757" />
              ),
          }}
        />

        <Tab.Screen
          name="Chat"
          component={MessageScreen}
          options={{
            tabBarLabel: "Message",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="chatbox-ellipses" size={24} color="#22AD01" />
              ) : (
                <Ionicons
                  name="chatbox-ellipses-outline"
                  size={24}
                  color="#575757"
                />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#22AD01" />
              ) : (
                <Ionicons name="person-outline" size={24} color="#575757" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
            headerShown: false,
            }}>
        <Stack.Screen
          name="Main"
          component={BottumTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProviderDetails"
          component={ServiceProviderDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
