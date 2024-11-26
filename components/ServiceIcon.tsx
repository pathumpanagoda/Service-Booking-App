import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type ServiceIconProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
};

export const ServiceIcon = ({ icon, label }: ServiceIconProps) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={32} color="#4B5563" />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '25%',
    padding: 8,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
    color: '#4B5563',
  },
});